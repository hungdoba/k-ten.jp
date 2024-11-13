import { convertToCoreMessages, streamText } from 'ai';
import { geminiProModel } from '../../../../ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: geminiProModel,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
