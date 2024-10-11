<script setup lang="ts">
async function getFile() {
  const [fileHandle] = await window.showOpenFilePicker();
  const file = await fileHandle.getFile();

  return file;
}
</script>

<template>
  <div></div>
</template>
