<script setup lang="ts">
interface Props {
  title: string;
  href: string;
}

defineProps<Props>();
</script>

<template>
  <li>
    <RouterLink :to="href" class="hover:text-red-500 ease-out duration-200">{{ title }}</RouterLink>
  </li>
</template>
