<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storage } from '@/utils/appwrite';
// import { useAuthStore } from '@/store/auth.store';

const avatar = ref();

// const authStore = useAuthStore();

async function getUserAvatar() {
  const response = await storage.getFileView('66ffb6e10014ceba0590', '66ffb735001b77f6af12');

  if (!response) return;

  return response;
}

onMounted(async () => {
  avatar.value = await getUserAvatar();

  console.log(avatar.value);
  
});
</script>

<template>
  <div class="w-10 h-10 bg-slate-400 rounded-full">
    <!-- {{ avatar }} -->
    <img v-if="avatar" :src="avatar.href" alt="">
  </div>
</template>
