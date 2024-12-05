<script setup lang="ts">
import { ref } from 'vue';
import { ValidationService } from '@/services/validation-service/ValidationService';
import type { IInputComponentProps } from './interfaces/IInputComponentProps';

const model = defineModel<string>();
const isFocused = ref(false);
const validationService = new ValidationService();

const props = withDefaults(defineProps<IInputComponentProps>(), {
  size: 'md',
});

console.log(validationService.validate(model.value, props.rules));
</script>

<template>
  <input
    @focusin="isFocused = true"
    @focusout="isFocused = false"
    v-model="model"
    class="input border-1 border-neutral-300 rounded-md focus:outline-none"
    :class="[{ input_focused: isFocused }, `input_${size}`]"
    type="text"
  />
</template>

<style lang="sass" scoped>
.input

  &_md
    @apply p-2

  &_focused
    @apply border-1 border-neutral-500
</style>
