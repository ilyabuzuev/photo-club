<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/store/auth.store';
import Header from '@/components/Header.vue';
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
  <div class="h-dvh">
    <!-- <Header /> -->
    <RouterView />
  </div>
</template>

<style scoped>

</style>
