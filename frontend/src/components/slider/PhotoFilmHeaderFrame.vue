<script setup lang="ts">
import type { IPhotoFilmHeaderFrameProps } from './interfaces/IPhotoFilmHeaderFrameProps';

defineProps<IPhotoFilmHeaderFrameProps>();
</script>

<template>
  <div class="frame__header">
    <div class="rect"></div>
  </div>
</template>

<style lang="sass" scoped>
.frame__header
  @apply relative
  width: 45px
  height: 45px
  background-color: #372320

.rect
  @apply absolute left-2 top-2 w-6 h-7 bg-gray-200 rounded-md
</style>
