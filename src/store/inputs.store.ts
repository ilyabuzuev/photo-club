import { defineStore } from 'pinia';

interface State {
  inputs: Input[];
}

interface Input {
  id: string;
  label: string;
  type: string;
  errors: string[];
}

export const useInputsStore = defineStore('inputs', {
  state: () =>
    ({
      inputs: []
    }) as State,

  getters: {
    getInputById: (state: State) => {
      return (id: string) => state.inputs.find((input) => input.id === id);
    }
  },

  actions: {
    set(input: Input) {
      this.$state.inputs.push(input);
    }
  }
});
