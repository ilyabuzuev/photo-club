import { defineStore } from 'pinia';

interface Error {
  inputId: string;
  message: string;
}

interface ErrorStoreState {
  _errors: Error[];
}

export const useErrorsStore = defineStore('errors', {
  state: (): ErrorStoreState => ({
    _errors: [],
  }),

  actions: {
    set(error: Error) {
      this._errors.push(error);
    },

    remove(inputId: string) {
      this._errors = this._errors.filter(error => error.inputId !== inputId);
    },
  },
});
