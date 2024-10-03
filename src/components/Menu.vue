<script setup lang="ts">
interface Props {
  condition: boolean;
}

defineProps<Props>();
</script>

<template>
  <Transition name="fade">
    <div v-if="condition" class="menu">
      <slot name="content" />
    </div>
  </Transition>
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
