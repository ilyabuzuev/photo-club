<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Container from '@/components/Container.vue';
import Logo from '@/components/Logo.vue';
import Navigation from '@/components/Navigation.vue';
import Profile from '@/components/Profile.vue';

</script>

<template>
  <header class="bg-gray-100">
    <Container>
      <div class="py-4">
        <div class="flex justify-between items-center gap-10 p-4 bg-white rounded-lg shadow-sm">
          <Logo />
          <Navigation />
          <Profile />
        </div>
      </div>
    </Container>
  </header>
</template>
