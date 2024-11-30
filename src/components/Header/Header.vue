<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Logo from '@/components/logo/Logo.vue';
import Navigation from '@/components/navigation/Navigation.vue';
import Auth from '@/components/auth/Auth.vue';
</script>

<template>
  <header class="header">
    <div class="header__container container xl:max-w-screen-xl">
      <Logo />
      <Navigation />
      <Auth />
    </div>
  </header>
</template>

<style lang="sass" scoped>
.header

  &__container
    @apply flex items-center justify-between
</style>
