import { ID } from 'appwrite';
import { account, client, database } from '@/utils/appwrite';
import { login } from '@/utils/login';

export async function register({ email, password }: { email: string; password: string }) {
  const response = await account.create(ID.unique(), email, password);

  return response;
}
