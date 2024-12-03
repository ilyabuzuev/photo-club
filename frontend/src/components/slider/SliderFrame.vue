<script setup lang="ts">
import Photo from '@/components/photo/Photo.vue';
import PhotoFilmDividerFrame from './PhotoFilmDividerFrame.vue';
import PhotoFilmHeaderFrame from './PhotoFilmHeaderFrame.vue';
import type { ISliderFrameProps } from './interfaces/ISliderFrameProps';

defineProps<ISliderFrameProps>();
</script>

<template>
  <li class="slider__item frame">
    <div class="flex">
      <PhotoFilmHeaderFrame
        v-for="(item, index) in 8"
        :key="index"
        :size="size"
        color="#343434"
      />
    </div>
    <div class="relative">
      <PhotoFilmDividerFrame class="absolute left-0" />
      <!-- <Photo :alt="photo.alt" :src="photo.src" :size="size" /> -->
      <div :style="{width: '360px', height: '240px', backgroundColor: '#6cf1a0' }"></div>
      <PhotoFilmDividerFrame class="absolute top-0 right-0" />
    </div>
    <div class="flex">
      <PhotoFilmHeaderFrame
        v-for="(item, index) in 8"
        :key="index"
        :size="size"
        color="#343434"
      />
    </div>
  </li>
</template>
