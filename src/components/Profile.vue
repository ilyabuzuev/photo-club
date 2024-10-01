<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useAuthStore } from '@/store/auth.store';

const isMenuOpen = ref(false);
const menuContainer = ref(null);

const authStore = useAuthStore();

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleClickOutside(event: Event) {
  if (menuContainer.value && !menuContainer.value.contains(event.target)) {
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
  <div>
    <div ref="menuContainer" class="menu-wrapper">
      <button @click="toggleMenu">click</button>
      <transition name="fade">
        <div v-if="isMenuOpen" class="menu">
          <div>
            <p v-if="authStore.userEmail">hello, {{ authStore.userEmail }}</p>
            <p>Menu content</p>
          </div>
          <div>
            <button
              v-if="authStore.isAuth"
              @click="authStore.logout"
              class="hover:text-red-500 ease-out duration-200"
            >
              Выйти
            </button>
            <div v-else>
              <RouterLink to="/login" class="hover:text-red-500 ease-out duration-200">
                Войти
              </RouterLink>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.menu-wrapper {
  position: relative;
}

.menu {
  position: absolute;
  top: 100%;
  left: -200%;
  background: white;
  border: 1px solid #ddd;
  padding: 10px;
  width: 150px;
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
