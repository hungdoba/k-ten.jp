import { generateUUID } from "@/utils/uid";
import { Chat } from "@/components/custom/Chat";

export default function Page() {
  const id = generateUUID();
  return <Chat key={id} id={id} initialMessages={[]} />;
}
