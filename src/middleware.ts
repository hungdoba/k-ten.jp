import { auth } from '@/auth';
import { routing } from './i18n/routing';
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const adminPaths = ['/admin'];
const protectedPaths = ['/admin', '/ask', '/password/change'];

const intlMiddleware = createMiddleware(routing);

const authMiddleware = auth((req, isAdminPage) => {
  const reqUrl = new URL(req.url);
  const locale = req.cookies.get('NEXT_LOCALE')?.value || 'en';

  if (!req.auth) {
    return NextResponse.redirect(
      new URL(
        `/${locale}/signin?callbackUrl=${encodeURIComponent(reqUrl.pathname)}`,
        req.url
      )
    );
  }

  if (isAdminPage && req.auth.user.role !== 'admin') {
    return NextResponse.redirect(new URL(`/${locale}/unauthorized`, req.url));
  }

  return intlMiddleware(req);
});

const createPathRegex = (paths: string[]) =>
  new RegExp(`^(/(${routing.locales.join('|')}))?(${paths.join('|')})/?$`, 'i');

const protectedPathRegex = createPathRegex(protectedPaths);
const adminPathRegex = createPathRegex(adminPaths);

// TODO: fix case when user change url to page which not has locale
export default function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;
  const isProtectedPage = protectedPathRegex.test(pathname);
  const isAdminPage = adminPathRegex.test(pathname);

  return isProtectedPage
    ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (authMiddleware as any)(req, isAdminPage)
    : intlMiddleware(req);
}

export const config = {
  matcher: ['/', '/(vi|ja|en)/:path*'],
};
