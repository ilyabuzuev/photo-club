<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/store/auth.store';

const authStore = useAuthStore();

// async function logoutFromAccount(): Promise<void> {
//   await logout();
// }

// const user = ref(userStore.getUser);

// console.log(user.value);
</script>

<template>
  <header>
    <button v-if="authStore.isAuth" @click="authStore.logout">logout</button>
  </header>
</template>