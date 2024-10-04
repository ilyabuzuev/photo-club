import { Client, Account, Databases, Storage } from 'appwrite';

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66efbca500050ed8a3da');
