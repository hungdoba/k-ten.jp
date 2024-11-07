import { ReactNode } from "react";
import { Locale } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";

type Props = {
  params: Promise<{ locale: Locale }>;
  children: ReactNode;
};

export default async function Home({ params, children }: Props) {
  const { locale } = await params;
  return (
    <div className="max-w-screen-lg min-h-screen mx-auto flex flex-col">
      <div className="absolute top-0 left-0 w-full flex justify-center">
        <Navbar locale={locale} />
      </div>
      {children}
    </div>
  );
}
