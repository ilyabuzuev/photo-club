import { account } from '@/utils/appwrite';

export async function login({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<void> {
  try {
    const response = await account.createEmailPasswordSession(email, password);

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
