<script setup lang="ts">
interface Props {
  label?: string;
}

defineProps<Props>();
</script>

<template>
  <button @click="$emit('clickEvent')" class="flex justify-center items-center gap-2">
    <slot></slot>
  </button>
</template>