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
    <div class="flex flex-col gap-2">
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
    @apply gap-4

  &_sm
    @apply gap-6

  &_md
    @apply gap-10

  &_lg
    @apply gap-12

  &_xl
    @apply gap-14
</style>
