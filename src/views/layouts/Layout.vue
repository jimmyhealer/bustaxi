<script setup lang="ts">
</script>

<template>
  <main>
    <router-view />
  </main>
</template>

<style scoped>
main {
  background-color: var(--bg-color);
  height: calc(100vh - 200px);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
}
</style>
