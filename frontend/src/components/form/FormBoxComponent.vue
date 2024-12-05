<script setup lang="ts">
import type { IFormBoxComponentProps } from './interfaces/IFormBoxComponentProps';

withDefaults(defineProps<IFormBoxComponentProps>(), {
  direction: 'column',
});
</script>

<template>
  <div class="form__box" :class="`form__box_${direction}`">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.form__box
  @apply flex gap-1

  &_row
    @apply flex-row

  &_column
    @apply flex-col
</style>
