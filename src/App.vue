<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/store/auth.store';
import { account } from './utils/appwrite';

const authStore = useAuthStore();

onMounted(async () => {
  try {
    const user = await account.get();

    console.log(user);

    if (user) authStore.set(user);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally block');
  }
});
</script>

<template>
  <div class="grid grid-rows-[max-content_1fr] h-dvh">
    <!-- <Header /> -->
    <RouterView />
  </div>
</template>

<style scoped>

</style>
