import { MessageIcon } from "./Icons";
import { useTranslations } from "next-intl";

export default function Overview() {
  const t = useTranslations("AskAIPage");
  return (
    <div key="overview" className="max-w-[500px] mt-24 mx-4 md:mx-0">
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <MessageIcon />
        </p>
        <p>{t("overview")}</p>
      </div>
    </div>
  );
}
