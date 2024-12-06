<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue';
import SliderFrame from './SliderFrame.vue';
import type { ISliderProps } from './interfaces/ISliderProps';
import type { IPhoto } from '../photo/interfaces/IPhoto';

const props = withDefaults(defineProps<ISliderProps>(), {
  autoPlay: true,
  photosSize: 'sm',
});

console.log(props.photos);

const sliderPhotos = ref<IPhoto[]>([]);
const sliderList = ref<HTMLUListElement>();
const isSliding = ref(false);
const currentPhotoIndex = ref(1);

// sliderPhotos.value.push(
//   props.photos[1],
//   props.photos[0],
//   ...props.photos.slice(2),
// );

sliderPhotos.value.push(
  props.photos[props.photos.length - 1],
  ...props.photos.slice(0),
  props.photos[0],
);

function nextPhoto() {
  /* setTimeout(() => {
     sliderList.value!.style.transition = 'none';
     sliderList.value!.style.left = `-360px`;

     for (let i = 0; i < sliderPhotos.value.length - 1; i++) {
       const first = sliderPhotos.value[0];

       if (i === sliderPhotos.value.length - 1) {
         sliderPhotos.value[i] = first;
       } else {
         [sliderPhotos.value[i], sliderPhotos.value[i + 1]] = [
           sliderPhotos.value[i + 1],
           sliderPhotos.value[i],
         ];
       }
     }

     isSliding.value = false;
   }, 500);
  */

  // const currItem = state.value;
  // const currItemIndex = list.findIndex(item => item === currItem);

  // console.log(currItemIndex);

  // const nextItemIndex =
  //   currItemIndex === list.length - 1 ? 0 : currItemIndex + 1;

  // state.value = list[nextItemIndex];

  // console.log(state.value);

  const pos = parseInt(sliderList.value!.style.left);

  isSliding.value = true;

  sliderList.value!.style.left = `${pos - 360}px`;

  setTimeout(() => {
    if (currentPhotoIndex.value === sliderPhotos.value.length - 2) {
      sliderList.value!.style.transition = 'none';
      sliderList.value!.style.left = `-360px`;
      isSliding.value = false;
      currentPhotoIndex.value = 1;
    } else {
      isSliding.value = false;
      currentPhotoIndex.value += 1;
    }
  }, 500);

  sliderList.value!.style.transition = 'left .5s ease';
}

function prevPhoto() {
  const pos = parseInt(sliderList.value!.style.left);

  isSliding.value = true;

  sliderList.value!.style.left = `${pos + 360}px`;

  setTimeout(() => {
    if (currentPhotoIndex.value === 1) {
      sliderList.value!.style.transition = 'none';
      sliderList.value!.style.left = `-${(sliderPhotos.value.length - 2) * 360}px`;
      isSliding.value = false;
      currentPhotoIndex.value = sliderPhotos.value.length - 2;
    } else {
      isSliding.value = false;
      currentPhotoIndex.value -= 1;
    }
  }, 500);

  sliderList.value!.style.transition = 'left .5s ease';
}

if (props.autoPlay) {
  setInterval(() => {
    nextPhoto();
  }, 3000);
}

// const list = ['1', '2', '3'];

// const state = ref('1');
</script>

<template>
  <div class="slider">
    <button v-if="!autoPlay" @click="prevPhoto" :disabled="isSliding">prev</button>
    <div class="slider__frames">
      <ul
        class="slider__list"
        ref="sliderList"
        :style="{ left: '-360px', transition: 'left .5s ease' }"
      >
        <SliderFrame
          v-for="(photo, index) in sliderPhotos"
          :key="index"
          :photo="photo"
          :size="photosSize"
        />
      </ul>
      <!-- <div
        class="relative inline-block"
        :style="{ width: '360px', height: '330px' }"
      >
        <Transition name="slide">
          <SliderFrame
            v-if="state === '1'"
            class="absolute"
            :photo="sliderPhotos[0]"
            :size="photosSize"
          />
          <SliderFrame
            v-else-if="state === '2'"
            class="absolute"
            :photo="sliderPhotos[1]"
            :size="photosSize"
          />
          <SliderFrame
            v-else-if="state === '3'"
            class="absolute"
            :photo="sliderPhotos[2]"
            :size="photosSize"
          />
        </Transition>
      </div> -->
    </div>

    <button v-if="!autoPlay" @click="nextPhoto" :disabled="isSliding">next</button>
  </div>
</template>

<style lang="sass" scoped>
.slider
  @apply flex gap-4

  &__frames
    @apply overflow-hidden

  &__list
    @apply relative flex
    width: 360px // ширина слайдера (к-во превью кадров)

.slide-enter-active,
.slide-leave-active
  transition: all .5s ease

.slide-enter-from
  transform: translateX(360px)

.slide-leave-to
  transform: translateX(-360px)
</style>
