<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import Button from '@/components/Button.vue';

const menu = ref<HTMLDivElement | null>(null);
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleClickOutside(event: Event) {
  if (menu.value && !menu.value.contains(event.target as HTMLElement)) {
    isMenuOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<template>
  <div ref="menu" class="relative">
    <Button @clickEvent="toggleMenu">
      <div>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="white"></rect>
            <path
              d="M17 9.5L12 14.5L7 9.5"
              stroke="#000000"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </g>
        </svg>
      </div>
      <slot name="buttonContent" />
    </Button>
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="menu__container absolute top-full bg-white rounded-md shadow-md"
      >
        <slot name="menuContent" />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.menu__container {
  padding: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
