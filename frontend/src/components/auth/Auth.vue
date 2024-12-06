<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import ButtonComponent from '../button/ButtonComponent.vue';
</script>

<template>
  <div class="auth flex gap-2">
    <ButtonComponent
      class="bg-neutral-900 text-white hover:bg-neutral-700"
      label="Войти"
      size="md"
      to="/register"
    />
  </div>
</template>
