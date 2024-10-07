<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Container from '@/components/Container/Container.vue';
import Logo from '@/components/Logo/Logo.vue';
import Navigation from '@/components/Navigation/Navigation.vue';
import Profile from '@/components/Profile/Profile.vue';
</script>

<template>
  <header class="bg-gray-100">
    <Container>
      <div class="py-4">
        <div class="flex justify-between items-center gap-10">
          <Logo />
          <Navigation />
          <Profile />
        </div>
      </div>
    </Container>
  </header>
</template>
