<script setup lang="ts">
import type { IFormComponentProps } from './interfaces/IFormComponentProps';

withDefaults(defineProps<IFormComponentProps>(), {
  spacing: 'md',
});
</script>

<template>
  <form @submit.prevent class="form flex flex-col" :class="`form_${spacing}`">
    <div>
      <slot name="header" />
    </div>
    <div class="flex flex-col" :class="`form_${spacing}`">
      <slot name="content" />
    </div>
    <div class="flex justify-center">
      <slot name="footer" />
    </div>
  </form>
</template>

<style lang="sass" scoped>
.form

  &_xs
    @apply gap-1

  &_sm
    @apply gap-2

  &_md
    @apply gap-3

  &_lg
    @apply gap-4

  &_xl
    @apply gap-5
</style>
