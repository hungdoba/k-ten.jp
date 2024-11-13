'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import ThemeSwitcher from '../common/ThemeSwitcher';
import { NavbarMenuItem } from '../../types/MenuItem';
import LocaleSwitcher from '../common/LocaleSwitcher';
import DropdownUser from '../common/DropdownUser';
import { Session } from 'next-auth';

interface Props {
  menuItems: NavbarMenuItem[];
  session: Session | null;
}

export default function NavbarClient({ menuItems, session }: Props) {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`container z-30 w-full max-w-screen-lg dark:bg-gray-900/50 backdrop-blur-2xl border-b border-gray-200 dark:border-gray-700`}
    >
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between py-4 md:py-4 md:gap-0 relative">
        <div className="relative z-20 w-full flex justify-between md:w-max md:px-0">
          {/* Logo */}
          <Link href="/" aria-label="logo" className="flex items-center">
            <Image
              src="/logos/logo.png"
              priority
              width={297}
              height={100}
              className="h-8 w-auto px-4"
              alt="Logo"
            />
          </Link>

          {/* Hamburger button */}
          <div className="relative flex items-center md:hidden max-h-10">
            <LocaleSwitcher />
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

            <DropdownUser session={session} />
          </div>
        </div>

        {/* Locale and Theme switchers */}
        <div className="hidden md:flex md:flex-row md:items-center">
          <LocaleSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
