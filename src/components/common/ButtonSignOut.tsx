import { signOut } from '@/auth';
import { useTranslations } from 'next-intl';

export function ButtonSignOut() {
  const t = useTranslations('Navbar');
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button
        className="w-full block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg"
        type="submit"
      >
        {t('signOut')}
      </button>
    </form>
  );
}
