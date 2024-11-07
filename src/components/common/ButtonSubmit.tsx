'use client';

import { useFormStatus } from 'react-dom';
import { FaSpinner } from 'react-icons/fa';

interface Props {
  label: string;
  disabled?: boolean;
}

export function ButtonSubmit({ label, disabled }: Props) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:disabled:bg-blue-300 dark:disabled:hover:bg-blue-500 dark:focus:ring-blue-800 flex items-center justify-center`}
      disabled={disabled || pending}
      type="submit"
    >
      {pending && <FaSpinner className="animate-spin mr-2" />}
      {label}
    </button>
  );
}
