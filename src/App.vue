<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="main bg-gray-100">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  min-height: 100dvh;
}
</style>
