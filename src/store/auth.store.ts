import { defineStore } from 'pinia';
import { account } from '@/utils/appwrite';

interface RegisterObject {
  id: string;
  email: string;
  password: string;
  name?: string;
}

interface LoginObject {
  email: string;
  password: string;
}

interface AuthStore {
  email: string;
  name: string;
  status: boolean;
}

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    user: {
      email: '',
      name: '',
      status: false
    }
  }),

  getters: {
    isAuth(): boolean {
      return this.user.status;
    },
    userEmail(): string {
      return this.user.email;
    }
  },

  actions: {
    clear() {
      this.user.status = false;
    },

    set(input: AuthStore) {
      this.$patch({ user: input });
    },

    async register({ id, email, password, name }: RegisterObject) {
      await account.create(id, email, password);
      await this.login({ email, password });
    },

    async login({ email, password }: LoginObject) {
      await account.createEmailPasswordSession(email, password);

      const response = await account.get();

      console.log(response.status);

      if (response) {
        this.set({
          email: response.email,
          name: response.name,
          status: response.status
        });
      }
    },

    async logout() {
      await account.deleteSession('current');

      this.clear();
    }
  }
});
