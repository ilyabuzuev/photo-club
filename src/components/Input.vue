<script setup lang="ts">
import { ref } from 'vue';
import type { InputHTMLAttributes } from 'vue';

interface Props {
  id: string;
  type: InputHTMLAttributes['type'];
  label?: string;
  placeholder?: string;
  labelPositioning: 'row' | 'col';
  validateRules?: { min: number; max: number };
  isValidate?: boolean;
  icon?: string;
}

const model = defineModel<string>();

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  labelPositioning: 'row',
  isValidate: false
});

const error = ref('');

const rules = {
  email: {
    min: 8,
    max: 64
  },
  password: {
    min: 8,
    max: 32
  },
  text: {
    min: 2,
    max: 28,
  }
};

function validate() {
  if (model.value?.length < rules[props.type].min || model.value?.length > rules[props.type].max) {
    setError(
      `Данное поле должно содержать от ${rules[props.type].min} до ${rules[props.type].max} символов`
    );
  } else {
    clearError();
  }
}

function setError(message: string) {
  error.value = message;
}

function clearError() {
  error.value = '';
}

function handleBlur() {
  validate();
}

console.log(props.id);
</script>

<template>
  <div
    class="flex justify-between gap-x-1.5"
    :class="{ 'flex-row': labelPositioning === 'row', 'flex-col': labelPositioning === 'col' }"
  >
    <div v-if="label">
      <div class="text-2xl font-bold">{{ label }}</div>
    </div>
    <div class="flex justify-stretch mb-1">
      <input
        v-model="model"
        @blur="handleBlur"
        :type="type"
        :placeholder="placeholder"
        class="px-5 py-2 text-2xl border-solid border-2 rounded-md bg-gray-100 self-stretch"
        :class="[error ? 'border-red-500' : 'border-gray-100']"
      />
    </div>
    <div v-if="error">
      <div class="text-xs text-red-500">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
input::placeholder {
  font-size: 1.5rem;
}
</style>
