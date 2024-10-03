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
    <Button @clickEvent="toggleMenu" label="Меню" />
    <Transition name="fade">
      <div v-if="isMenuOpen" class="menu__container absolute top-full -left-full bg-white rounded-md shadow-md">
        <slot name="content" />
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
