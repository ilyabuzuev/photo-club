<script setup lang="ts">
import type { ICardComponentProps } from './interfaces/ICardComponentProps';

withDefaults(defineProps<ICardComponentProps>(), {
  paddings: 'md',
  flat: false,
});
</script>

<template>
  <div class="card" :class="[`card_${paddings}`, { 'bg-white': !flat }]">
    <slot />
  </div>
</template>

<style lang="sass" scoped>
.card
  @apply shadow-md shadow-neutral-300 rounded-xl

  &_xs
    @apply p-2

  &_sm
    @apply p-4

  &_md
    @apply p-6

  &_lg
    @apply p-8

  &_xl
    @apply p-10
</style>
