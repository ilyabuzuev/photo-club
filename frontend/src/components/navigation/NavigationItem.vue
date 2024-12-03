<script setup lang="ts">
import type { INavigationItem } from './interfaces/INavigationItem';

defineProps<INavigationItem>();
</script>

<template>
  <li class="navigation__item">
    <router-link class="navigation__link" :to="href">
      <span class="navigation__label">{{ label }}</span>
    </router-link>
  </li>
</template>

<style lang="sass" scoped>
</style>
