<script setup lang="ts">
</script>

<template>
  <el-button type="success" class="submit" size="large" @click="$emit('submit')">確認</el-button>
</template>

<style scoped>
.submit {
  display: block;
  background-color: var(--dark-green-text);
  color: #ffffff;
  font-size: 36px;
  width: 80%;
  height: fit-content;
  margin: 0 auto;
}
</style>