<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from '@/stores/user.store';

const userStore = useUserStore();

// async function logoutFromAccount(): Promise<void> {
//   await logout();
// }

const user = ref(userStore.getUser);

console.log(user.value);
</script>

<template>
  <header>
    <button v-if="user.email" @click="userStore.logout">logout</button>
  </header>
</template>