<script setup lang="ts">
import CardComponent from '@/components/card/CardComponent.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';
</script>

<template>
  <div>
    <ContainerComponent class="register__container">
      <CardComponent>
        <h2 class="text-xl text-neutral-800 font-semibold">Регистрация</h2>
        <form class="form" @submit.prevent></form>
      </CardComponent>
    </ContainerComponent>
  </div>
</template>

<style lang="sass" scoped>
.register__container
  @apply h-full flex items-center justify-center
</style>
