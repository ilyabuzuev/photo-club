import { defineStore } from 'pinia';

export const useLoaderStore = defineStore('loaderStore', {
  state: () => ({
    isLoading: false
  }),

  getters: {
    loadingState: (state) => state.isLoading
  },

  actions: {
    set(state: boolean) {
      this.isLoading = state;
    }
  }
});
