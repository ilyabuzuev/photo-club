<script setup lang="ts">
interface Props {
  firstname: string;
  lastname: string;
}

defineProps<Props>();
</script>

<template>
  <div class="member relative w-64 h-64 rounded-xl overflow-hidden shadow-md z-0 cursor-pointer">
    <div class="member__photo w-full h-full bg-blue-100"></div>
    <div class="member__name absolute flex gap-1 text-lg text-white z-10">
      <div>
        {{ firstname }}
      </div>
      <div>
        {{ lastname }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.member:hover .member__name {
  top: 85%;
}

.member:hover .member__photo {
  filter: brightness(0.5);
}

.member__photo {
  transition: filter 0.3s ease;
}

.member__name {
  left: 7%;
  top: 100%;
  transition: top 0.3s ease;
}
</style>
