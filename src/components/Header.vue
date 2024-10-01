<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAuthStore } from '@/store/auth.store';
import Container from '@/components/Container.vue';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';

const authStore = useAuthStore();
</script>

<template>
  <header class="bg-gray-100">
    <Container>
      <div class="py-4">
        <div class="flex justify-between items-center gap-10 p-4 bg-white rounded-lg shadow-sm">
          <Logo />
          <Navigation />
          <div>
            <button
              v-if="authStore.isAuth"
              @click="authStore.logout"
              class="hover:text-red-500 ease-out duration-200"
            >
              Выйти
            </button>
            <RouterLink to="/login" class="hover:text-red-500 ease-out duration-200">
              Войти
            </RouterLink>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>
