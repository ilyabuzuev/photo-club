import { Client, Account, Databases } from 'appwrite';

export const client = new Client();
export const account = new Account(client);
export const database = new Databases(client);

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('66efbca500050ed8a3da');
