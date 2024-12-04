<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/header/Header.vue';
</script>

<template>
  <div class="app__content">
    <Header />
    <RouterView />
  </div>
</template>

<style lang="sass" scoped>
.app__content
  @apply h-dvh grid
  grid-template-rows: max-content 1fr
</style>
