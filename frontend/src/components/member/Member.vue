<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { IMember } from './interfaces/IMember';

defineProps<IMember>();
</script>

<template>
  <li class="member__item member member_hovered">
    <router-link class="member__link" :to="`/members/${id}`">
      <h3 class="member__name">{{ name }}</h3>
      <h4 class="member__email">{{ email }}</h4>
    </router-link>
  </li>
</template>

<style lang="sass" scoped>
.member
  @apply overflow-hidden bg-white rounded-md shadow-neutral-300 transition-shadow

  &__link
    @apply block p-2

  &_hovered
    @apply hover:shadow-md
</style>
