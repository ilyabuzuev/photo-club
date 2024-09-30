import { account } from "@/utils/appwrite";

export async function logout(): Promise<void> {
  await account.deleteSession('current');
}
