// import { routing } from "./i18n/routing";
// import { NextRequest } from "next/server";
// import { withAuth } from "next-auth/middleware";
// import createMiddleware from "next-intl/middleware";

// // TODO: hard code category and locale for performance,
// // must reconfig in case change categories or locales
// const intlMiddleware = createMiddleware(routing);

// const publicPages = new Set([
//   "",
//   "signin",
//   "signup",
//   "tips",
//   "investment",
//   "jlpt",
//   "gallery",
// ]);

// const authMiddleware = withAuth((req) => intlMiddleware(req));

// export default function middleware(req: NextRequest) {
//   let pathname = req.nextUrl.pathname;
//   const normalizedPath = pathname.replace(/^\/(en|ja|vi)\//, "/");
//   const isPublicPage = publicPages.has(normalizedPath.split("/")[1]);

//   if (isPublicPage) {
//     return intlMiddleware(req);
//   } else {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     return (authMiddleware as any)(req);
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next|.*\\..*).*)"],
// };

import { routing } from './i18n/routing';
import { NextRequest } from 'next/server';
import { withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';

// TODO: hard-code category and locale for performance,
// must reconfigure in case of category or locale changes
const intlMiddleware = createMiddleware(routing);

const publicPages = new Set([
  '',
  'signin',
  'signup',
  'tips',
  'investment',
  'jlpt',
  'gallery',
]);

// Default auth middleware without unnecessary wrapping
const authMiddleware = withAuth((req) => intlMiddleware(req));

export default function middleware(req: NextRequest) {
  let pathname = req.nextUrl.pathname;

  // Strip the locale prefix (e.g., /en/, /ja/, /vi/)
  const languagePrefix = pathname.split('/')[1];
  if (['en', 'ja', 'vi'].includes(languagePrefix)) {
    pathname = pathname.replace(`/${languagePrefix}`, '');
  }

  const isPublicPage = publicPages.has(pathname.split('/')[1]);

  if (isPublicPage) {
    return intlMiddleware(req); // Skip auth for public pages
  } else {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (authMiddleware as any)(req);
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Avoid unnecessary middleware on API and Next.js assets
};
