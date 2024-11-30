<script setup lang="ts">
import type { IPhoto } from '@/components/photo/interfaces/IPhoto';
import Slider from '@/components/slider/Slider.vue';

const photos: IPhoto[] = [
  {
    src: '/images/hero-image1.jpg',
    alt: 'Красивая девчоночка лежит на пледике на природе',
  },
  {
    src: '/images/hero-image2.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image3.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image4.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image5.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image6.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image7.jpg',
    alt: 'some alt',
  },
];
</script>

<template>
  <main class="main">
    <section class="hero">
      <div class="hero__container">
        <div class="hero__slider">
          <Slider :photos="photos" photos-size="sm" />
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.main
  @apply h-full

.hero
  @apply h-full

  &__container
    @apply h-full flex items-center justify-center
</style>
