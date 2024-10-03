import { defineStore } from 'pinia';
import { database } from '@/utils/appwrite';
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
  },

  actions: {
    async fetchUsers() {
      const response: UsersFromDB = await database.listDocuments(DB_ID, USERS_COLLECTION_ID);

      return response;
    },

    async setUsers() {
      this.$state.users = (await this.fetchUsers()).documents;
    }
  }
});
