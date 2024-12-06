<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { useInputsStore } from '@/stores/inputs.store';
import { useErrorsStore } from '@/stores/errors.store';
import { ValidationService } from '@/services/validation-service/ValidationService';
import type { IInputComponentProps } from './interfaces/IInputComponentProps';

const model = defineModel<string>();
const isFocused = ref(false);
const validationService = new ValidationService();
const inputsStore = useInputsStore();
const errorsStore = useErrorsStore();
const validateResult = ref<true | { message: string }>();
const id = uuidv4();

const isError = computed(() => validateResult.value !== undefined && validateResult.value !== true);

const props = withDefaults(defineProps<IInputComponentProps>(), {
  size: 'md',
  type: 'text'
});

console.log(model.value);


function validate() {
  isFocused.value = false;

  if (model.value === undefined) return;

  validateResult.value = validationService.validate(model.value, props.rules);
}

// console.log(validationService.validate(model.value, props.rules));

function update() {
  if (!model.value) return;

  const input = inputsStore.getById(id);

  if (!input) return;

  input.text = model.value;
}

onMounted(() => {
  if (!model.value) return;

  inputsStore.set({ id, text: model.value, errors: [] });
});
</script>

<template>
  <div>
    <input
      v-model="model"
      @focusin="isFocused = true"
      @focusout="validate"
      @input="validate"
      @update:model-value="update"
      class="input w-full border-1 border-neutral-300 rounded-md focus:outline-none"
      :class="[{ input_focused: isFocused }, `input_${size}`, { 'border-red-500': isError }]"
      :type="type"
    />
    <div v-if="isError" class="mt-1 text-xs text-red-500">
      <div>{{ validateResult.message }}</div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.input

  &_md
    @apply p-2

  &_focused
    @apply border-1 border-neutral-500
</style>
