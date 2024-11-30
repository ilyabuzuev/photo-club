<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="logo">
    <router-link class="logo__link" to="/">
      <span class="logo__title">Photo</span>
      <span class="logo__subtitle">club</span>
    </router-link>
  </div>
</template>

<style lang="sass">
.logo

  &__link
    @apply flex flex-col

  &__title
    @apply text-2xl text-zinc-700 font-bold leading-none

  &__subtitle
    @apply tracking-[.6em] text-zinc-500 font-medium leading-none
</style>
