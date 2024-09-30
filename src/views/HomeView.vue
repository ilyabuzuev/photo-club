<script setup lang="ts">
import { useUserStore } from '@/stores/user.store';
import { Client, Account, Databases } from 'appwrite';

const userStore = useUserStore();

console.log(userStore.getUser);

</script>

<template>
  <main class="main bg-blue-50">home</main>
</template>
