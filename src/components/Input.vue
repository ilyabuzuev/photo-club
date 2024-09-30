<script setup lang="ts">
import { ref } from 'vue';
import type { InputHTMLAttributes } from 'vue';

interface Props {
  id: string;
  type: InputHTMLAttributes['type'];
  label: string;
  placeholder?: string;
  labelPositioning: 'row' | 'col';
  validateRules?: { min: number; max: number };
  isValidate?: boolean;
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
  }
};

function validate() {
  if (model.value?.length < rules[props.type].min || model.value?.length > rules[props.type].max) {
    setError(
      `Поле '${props.label}' должно содержать от ${rules[props.type].min} до ${rules[props.type].max} символов`
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
    <div>
      <div>{{ label }}</div>
    </div>
    <div>
      <input
        v-model="model"
        @blur="handleBlur"
        :type="type"
        :placeholder="placeholder"
        class="px-2 py-0.5 border-solid border-2 rounded-md"
        :class="[error ? 'border-red-500' : 'border-gray-200']"
      />
    </div>
    <div v-if="error">
      <div class="text-xs text-red-500">{{ error }}</div>
    </div>
  </div>
</template>
