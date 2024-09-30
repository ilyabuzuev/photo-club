<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useUserStore } from './stores/user.store';
import Header from '@/components/Header.vue';

const userStore = useUserStore();

onMounted(() => {
  userStore.init();
});
</script>

<template>
  <Header />
  <main class="main bg-gray-100">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
  min-height: 100dvh;
}
</style>
