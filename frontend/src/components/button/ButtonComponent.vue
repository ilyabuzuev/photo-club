<script setup lang="ts">
import type { IButtonProps } from './interfaces/IButtonProps';

withDefaults(defineProps<IButtonProps>(), {
  size: 'md',
  label: '',
  to: '',
});
</script>

<template>
  <button v-if="!to" class="button rounded-md" :class="[`button_${size}`]">
    <span v-if="label" class="button__label leading-none" :class="``">{{
      label
    }}</span>
  </button>
  <router-link
    v-else
    class="button flex items-center rounded-md"
    :class="[`button_${size}`]"
    :to="to"
  >
    <span v-if="label">{{ label }}</span>
  </router-link>
</template>

<style lang="sass" scoped>
.button
  @apply transition-colors
  font-size: 1rem

  &_md
    @apply px-8 py-2
</style>
