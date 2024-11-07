import { auth } from '@/auth';

export async function getUserId(): Promise<number | string> {
  const session = await auth();

  if (!session) return 'Unauthorized';
  if (!session.user) return 'User not found';
  if (!session.user.id) return 'User id not found';
  return Number(session.user.id);
}
