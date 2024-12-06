import { defineStore } from 'pinia';

interface Error {
  message: string;
}

interface StoreInput {
  id: string;
  text: string;
  errors: Error[];
}

interface InputsStoreState {
  _inputs: StoreInput[];
}

export const useInputsStore = defineStore('inputs', {
  state: (): InputsStoreState => ({
    _inputs: [],
  }),

  getters: {
    getById: (state: InputsStoreState) => {
      return (id: string): StoreInput | undefined => {
        return state._inputs.find(input => input.id === id);
      };
    },
  },

  actions: {
    set(input: StoreInput) {
      this._inputs.push(input);
    },
  },
});
