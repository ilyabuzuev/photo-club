import { defineStore } from 'pinia';
import { account } from '@/utils/appwrite';

interface RegisterObject {
  id: string;
  email: string;
  password: string;
  name: string;
}

interface LoginObject {
  id: string;
  email: string;
  password: string;
  name: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      id: '',
      email: '',
      name: ''
    }
  }),

  getters: {
    getUser(state) {
      return state.user;
    }
  },

  actions: {
    setUser(id: string, email: string, name?: string) {
      this.user.id = id;
      this.user.email = email;
      this.user.name = name;
    },

    async init() {
      const res = await account.get();

      this.setUser(res.$id, res.email, res.name);
    },

    async register({ id, email, password, name }: RegisterObject) {
      await account.create(id, email, password, name);
      await this.login({ id, email, password, name });
    },

    async login({ id, email, password, name }: LoginObject) {
      await account.createEmailPasswordSession(email, password);

      this.setUser(id, email, name);
    },

    async logout() {
      await account.deleteSession('current');

      this.user = {
        id: '',
        email: '',
        name: ''
      };
    }
  }
});
