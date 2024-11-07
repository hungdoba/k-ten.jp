'use client';
import Image from 'next/image';
import { ReactNode, useState, useTransition } from 'react';
import { Session } from 'next-auth';
import { Link, Locale, routing, usePathname, useRouter } from '@/i18n/routing';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { MenuItem, NavbarMenuItem } from '../../types/MenuItem';
import { useLocale, useTranslations } from 'next-intl';
import Dropdown from '../common/Dropdown';
import { useParams } from 'next/navigation';

interface Props {
  session: Session | null;
  children: ReactNode;
  menuItems: NavbarMenuItem[];
}

export default function NavbarClient({ session, children, menuItems }: Props) {
  const t = useTranslations('Navbar');
  const tl = useTranslations('LocaleSwitcher');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentPath = usePathname();

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const toggleMenu = () => {
    if (isPending) return;
    setIsMenuOpen((prev) => !prev);
  };

  const localeItems: MenuItem[] = routing.locales.map((locale: Locale) => ({
    label: tl('locale', { locale }),
    value: locale,
    icon: tl('icon', { locale }),
  }));

  function handleSwitchLocale(value: string): void {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value }
      );
    });
  }

  return (
    <nav
      className={`container z-30 w-full max-w-screen-lg dark:bg-gray-900/50 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="flex flex-wrap items-center justify-between py-4 md:py-4 md:gap-0 relative">
        <div className="relative z-20 w-full flex justify-between md:w-max md:px-0">
          {/* Logo */}
          <Link href="/" aria-label="logo" className="flex items-center">
            <Image
              src="/logo.png"
              priority
              width={297}
              height={100}
              className="h-12 w-auto px-4"
              alt="Logo"
              style={{
                maxWidth: '50%',
                height: 'auto',
              }}
            />
          </Link>

          {/* Hamburger button */}
          <div className="relative flex items-center md:hidden max-h-10">
            <Dropdown
              menuItems={localeItems}
              onSelect={handleSwitchLocale}
              defaultSelected={locale}
            />
            <ThemeSwitcher />
            <label
              aria-label="hamburger"
              id="hamburger"
              className="relative p-4"
              onClick={toggleMenu}
            >
              <div
                aria-hidden="true"
                id="line"
                className={`m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className={`m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : ''
                }`}
              ></div>
            </label>
          </div>
        </div>

        {/* Overlay for mobile menu */}
        <div
          onClick={toggleMenu}
          aria-hidden="true"
          className={`fixed z-10 inset-0 h-screen w-screen md:hidden bg-white/70 backdrop-blur-2xl origin-top transition duration-500 ${
            isMenuOpen ? 'scale-y-100' : 'scale-y-0'
          } md:hidden dark:bg-gray-900/70`}
        ></div>

        {/* Menu */}
        <div
          className={`z-20 gap-6 rounded-3xl shadow-2xl shadow-gray-600/10 justify-end w-full transition-all duration-300 scale-95 origin-top ${
            isMenuOpen
              ? 'mt-8 md:mt-0 p-8 md:p-0  opacity-100 visible'
              : 'mt-0 h-0 p-0 invisible opacity-0 md:visible md:opacity-100'
          } md:relative md:scale-100 md:flex md:flex-row md:items-center md:gap-0 md:p-0 md:bg-transparent md:w-max md:shadow-none dark:shadow-none dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}
        >
          <div className="md:flex md:flex-row md:items-center">
            {/* Menu options */}
            <div
              className={`text-gray-600 dark:text-gray-300 md:pr-4 md:w-auto w-full md:pt-0`}
            >
              <ul className="tracking-wide font-medium md:text-sm flex-col flex md:flex-row gap-6 md:gap-0">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${
                        item.href === currentPath && 'text-green-400'
                      } block md:px-4 transition hover:text-primary`}
                    >
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {session && session.user ? (
              <>
                <div className="hidden md:block">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="relative flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    {session.user.name}
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`${
                      isDropdownOpen ? 'scale-y-100' : 'scale-y-0'
                    } origin-top transition duration-500 z-10 absolute right-0 top-0 mt-6 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                      <li>
                        <Link
                          href="/password/change"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
                        >
                          {t('changePassword')}
                        </Link>
                      </li>
                      {session.user.role == 'admin' && (
                        <li>
                          <Link
                            href="/admin"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
                          >
                            {t('admin')}
                          </Link>
                        </li>
                      )}
                    </ul>
                    <div className="py-1">{children}</div>
                  </div>
                </div>
                <div className="md:hidden flex flex-col justify-center items-center text-blue-600 dark:text-blue-500">
                  {session.user.role == 'admin' && (
                    <Link href="/admin" className="block">
                      {t('admin')}
                    </Link>
                  )}
                  <Link className="block mt-6 md:mt-0" href="/password/change">
                    {t('changePassword')}
                  </Link>
                  <div className="mt-4">{children}</div>
                </div>
              </>
            ) : (
              <Link
                className="text-blue-600 dark:text-blue-500  block mt-6 md:mt-0"
                href="/signin"
              >
                {t('signIn')}
              </Link>
            )}
          </div>
        </div>

        {/* Locale and Theme switchers */}
        <div className="hidden md:flex md:flex-row md:items-center">
          {/* Locale Switcher  */}
          <Dropdown
            menuItems={localeItems}
            onSelect={handleSwitchLocale}
            defaultSelected={locale}
          />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
