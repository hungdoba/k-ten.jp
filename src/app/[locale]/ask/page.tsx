import { generateUUID } from '@/utils/uid';
import { Chat } from '@/components/custom/chat';

export default function Page() {
  const id = generateUUID();
  return <Chat key={id} id={id} initialMessages={[]} />;
}
