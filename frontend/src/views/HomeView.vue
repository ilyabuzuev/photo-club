<script setup lang="ts">
import type { IPhoto } from '@/components/photo/interfaces/IPhoto';
import Slider from '@/components/slider/Slider.vue';
import ContainerComponent from '@/components/container/ContainerComponent.vue';

const photos: IPhoto[] = [
  {
    src: '/images/hero-image1-360.jpg',
    alt: 'Красивая девчоночка лежит на пледике на природе',
  },
  {
    src: '/images/hero-image2-360.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image3-360.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image4-360.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image5-360.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image6-360.jpg',
    alt: 'some alt',
  },
  {
    src: '/images/hero-image7-360.jpg',
    alt: 'some alt',
  },
];
</script>

<template>
  <main class="main">
    <section class="hero">
      <ContainerComponent class="hero__container">
        <div class="flex">
          <div cla>
            <h2 class="hero__title">
              <span class="text-neutral-800">PhotoClub</span> - Lorem ipsum dolor sit amet
              consectetur.
            </h2>
            <p class="hero__text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum, aspernatur
              iure eligendi, dolore, officia corrupti est at voluptatem assumenda commodi aliquam.
              Nulla ab dolores earum perferendis non deleniti quas?
            </p>
          </div>
          <div class="hero__slider">
            <Slider :photos="photos" photos-size="sm" />
          </div>
        </div>
        <div class="text-5xl text-neutral-300 mt-28">Ну тут надо что-то прихуярить, хз, а то слишком пусто</div>
      </ContainerComponent>
    </section>
  </main>
</template>

<style lang="sass" scoped>
.hero
  @apply h-full

  &__container
    @apply flex flex-col gap-4 h-full p-12

  &__title
    @apply mb-6 text-6xl font-bold text-neutral-700

  &__text
    @apply text-xl text-neutral-500

@media (max-width: 1200px)
  .hero

    &__title
      @apply text-4xl

    &__text
      @apply text-lg

@media (max-width: 1024px)
  .hero

    &__container
      @apply flex-col

    // &__title
    //   @apply text-4xl

    // &__text
    //   @apply text-lg
</style>
