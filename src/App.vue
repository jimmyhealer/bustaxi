<script setup lang="ts">
import {RouterView} from 'vue-router'
import TheNavbar from './components/TheNavbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheNavbar />
  <RouterView />
  <TheFooter />
</template>

<style>
#app {
  position: relative;
  max-width: var(--width);
  margin: 0 auto;
  height: 100vh;
  padding-top: 100px;
  padding-bottom: 100px;
}
</style>
