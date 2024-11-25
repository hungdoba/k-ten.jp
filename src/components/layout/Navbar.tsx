import { Locale } from '@/i18n/routing';
import NavbarClient from './NavbarClient';
import { getServerSession } from 'next-auth';
import { getCategoriesCache } from '@/actions/category';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const session = await getServerSession(authOptions);

  const categories = await getCategoriesCache(locale);

  const menuItems = categories.map((category) => ({
    href: `/${category.slug}`,
    label: category.title,
  }));

  return <NavbarClient session={session} menuItems={menuItems} />;
}
