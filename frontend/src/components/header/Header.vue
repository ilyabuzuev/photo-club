<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from '@/components/logo/Logo.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Auth from '@/components/auth/Auth.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';

const route = useRoute();
</script>

<template>
  <header class="header">
    <ContainerComponent class="header__container">
      <Logo />
      <Navigation v-if="route.path !== '/register'" />
      <Auth v-if="route.path !== '/register'" />
    </ContainerComponent>
  </header>
</template>

<style lang="sass" scoped>
.header
  @apply bg-white shadow-md shadow-neutral-200

  &__container
    @apply flex items-center justify-between py-2
</style>
