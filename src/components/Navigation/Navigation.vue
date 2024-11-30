<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { navigationConfig } from '@/config/navigation/navigation.config';
import type { INavigationItem } from './interfaces/INavigationItem';
import NavigationItem from './NavigationItem.vue';

const navigationItems: INavigationItem[] = navigationConfig.items;
</script>

<template>
  <nav class="navigation">
    <NavigationItem
      v-for="(item, index) in navigationItems"
      :key="index"
      :label="item.label"
      :href="item.href"
    />
  </nav>
</template>

<style lang="sass" scoped>
.navigation
  @apply flex gap-10
</style>
