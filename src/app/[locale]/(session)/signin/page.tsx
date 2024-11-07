"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { EMPTY_FORM_STATE } from "@/types/FormState";
import { authenticate } from "@/actions/session";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ButtonSubmit } from "@/components/common/ButtonSubmit";

export default function SignInPage() {
  const t = useTranslations("SignInPage");
  const [formState, formAction] = useActionState(
    authenticate,
    EMPTY_FORM_STATE
  );
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const callbackUrl = urlParams.get("callbackUrl");

    if (formState.message) {
      if (formState.status === "ERROR") {
        toast.error(formState.message);
      } else {
        if (callbackUrl) {
          router.push(decodeURIComponent(callbackUrl));
        } else {
          router.push("/");
        }
      }
    }
  }, [formState.status, formState.message, router]);

  return (
    <form className="w-96 mx-auto" action={formAction}>
      <div className="mb-5">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("username")}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="dark:read-only:text-gray-400 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder={t("usernamePlaceholder")}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          {t("password")}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="dark:read-only:text-gray-400 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          placeholder={t("passwordPlaceholder")}
        />
      </div>
      <div className="flex justify-end mb-5">
        <Link
          href="/password/forgot"
          className="text-sm text-blue-600 hover:underline dark:text-blue-500"
        >
          {t("forgot")}
        </Link>
      </div>
      <div className="mb-4">
        <ButtonSubmit label={t("signIn")} />
      </div>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {t("signUpQuestion")}
        {` `}
        <Link
          href="/signup"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-600 dark:text-blue-500"
        >
          {t("signUp")}
        </Link>
      </p>
    </form>
  );
}
