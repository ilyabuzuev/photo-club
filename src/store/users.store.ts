import { defineStore } from 'pinia';
import { Query } from 'appwrite';
import { account, database } from '@/utils/appwrite';
import { DB_ID, USERS_COLLECTION_ID } from '@/app.constants';
import type { UsersFromDB } from '@/interfaces/UsersFromDB';

interface State {
  users: UsersFromDB['documents'];
}

export const useUsersStore = defineStore('usersStore', {
  state: (): State => {
    return {
      users: []
    };
  },

  getters: {
    _users: (state) => state.users,

    async getUserById() {
      const currentAccount = await account.get();

      const response: UsersFromDB = await database.listDocuments(DB_ID, USERS_COLLECTION_ID, [
        Query.equal('id', currentAccount.$id)
      ]);

      if (!response) console.log('error');

      console.log(response);

      return response.documents[0];
    }
  },

  actions: {
    async fetchUsers() {
      const response: UsersFromDB = await database.listDocuments(DB_ID, USERS_COLLECTION_ID);

      return response;
    },

    async setUsers() {
      this.users = [];

      this.$state.users = (await this.fetchUsers()).documents;
    }
  }
});
