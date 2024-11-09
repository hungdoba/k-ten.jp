import { Locale } from '@/i18n/routing';
import NavbarClient from './NavbarClient';
import { getCategoriesCache } from '@/actions/category';
import { getServerSession } from 'next-auth';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const session = await getServerSession();

  const categories = await getCategoriesCache(locale);

  const menuItems = categories.map((category) => ({
    href: `/${category.slug}`,
    label: category.title,
  }));

  return <NavbarClient session={session} menuItems={menuItems} />;
}
