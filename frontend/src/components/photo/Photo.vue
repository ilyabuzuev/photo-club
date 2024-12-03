<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { IPhotoProps } from './interfaces/IPhotoProps';

defineProps<IPhotoProps>();
</script>

<template>
  <div class="photo" :class="[`photo-${size}`]">
    <img class="w-full h-full" :src="src" :alt="alt" />
  </div>
</template>

<style lang="sass" scoped>
.photo
  &-xs
    width: 270px
    height: 180px

  &-sm
    width: 360px
    height: 240px

  &-md
    width: 420px
    height: 280px

  &-lg
    width: 510px
    height: 340px

  &-xl
    width: 600px
    height: 400px
</style>
