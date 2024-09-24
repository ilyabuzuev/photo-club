<script setup lang="ts">
import type { InputHTMLAttributes } from 'vue';

interface Props {
  type: InputHTMLAttributes['type'];
  label?: string;
  placeholder?: string;
  labelPositioning: 'row' | 'col';
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  labelPositioning: 'row'
});
</script>

<template>
  <div
    class="flex justify-between gap-x-1.5"
    :class="{ 'flex-row': labelPositioning === 'row', 'flex-col': labelPositioning === 'col' }"
  >
    <div>
      <div>{{ label }}</div>
    </div>
    <div>
      <input
        type="text"
        :placeholder="placeholder"
        class="px-2 border-solid border-2 border-gray-200 rounded-md"
      />
    </div>
  </div>
</template>
