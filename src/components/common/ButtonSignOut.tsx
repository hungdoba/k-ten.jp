"use client";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";

export function ButtonSignOut() {
  const t = useTranslations("Navbar");
  return (
    <button
      className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
      type="button"
      onClick={() => signOut()}
    >
      {t("signOut")}
    </button>
  );
}
