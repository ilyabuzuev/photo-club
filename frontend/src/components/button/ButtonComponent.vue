<script setup lang="ts">
import type { IButtonProps } from './interfaces/IButtonProps';

withDefaults(defineProps<IButtonProps>(), {
  size: 'md',
  label: '',
  buttonStyle: 'flat',
  bgColor: 'primary',
  textColor: 'white',
  borderColor: '',
});
</script>

<template>
  <button
    class="button"
    :class="`button_${buttonStyle} bg_${bgColor} button_${size}`"
  >
    <span v-if="label" class="button__label leading-none" :class="``">{{ label }}</span>
  </button>
</template>

<style lang="sass" scoped>
.button

  &_flat
    @apply border-none

  &_outlined
    @apply  bg-none border-2

  &_md
    @apply px-4 py-1 rounded-md

.button.button_outlined .button__label

.button.button_flat .button__label

.bg_primary
  @apply bg-blue-500
</style>
