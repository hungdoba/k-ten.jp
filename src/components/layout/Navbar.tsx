import { auth } from '@/auth';
import { Locale } from '@/i18n/routing';
import NavbarClient from './NavbarClient';
import { getCategories } from '@/actions/category';
import { ButtonSignOut } from '../common/ButtonSignOut';

type Props = {
  locale: Locale;
};

export default async function Navbar({ locale }: Props) {
  const session = await auth();

  const categories = await getCategories({ locale });

  const menuItems = categories.map((category) => ({
    href: `/${category.slug}`,
    label: category.title,
  }));

  return (
    <NavbarClient session={session} menuItems={menuItems}>
      <ButtonSignOut />
    </NavbarClient>
  );
}
