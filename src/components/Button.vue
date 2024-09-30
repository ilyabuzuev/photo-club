<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<template>
  <button @click="$emit('clickEvent')">
    {{ label }}
  </button>
</template>