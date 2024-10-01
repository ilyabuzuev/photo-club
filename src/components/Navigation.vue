<script setup lang="ts">
import NavigationItem from '@/components/NavigationItem.vue';

const navigationItems = [
  {
    title: 'Фотографы',
    href: '/photographers'
  }
];
</script>

<template>
  <nav>
    <ul>
      <NavigationItem
        v-for="(item, index) in navigationItems"
        :key="index"
        :title="item.title"
        :href="item.href"
      />
    </ul>
  </nav>
</template>
