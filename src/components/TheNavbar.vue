<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { signInWithGoogle, signOut } = userStore

const route = useRoute()
const title = computed(() => route.meta.title)
</script>

<template>
  <nav>
    <template v-if="title">
      <RouterLink to="/">
        <el-icon class="back" size="40" color="#ffffff">
          <ArrowLeftBold />
        </el-icon>
      </RouterLink>
      <h1 class="title">{{ title }}</h1>
      <el-icon size="40" color="#ffffff">
        <Van />
      </el-icon>
    </template>
    <template v-else>
      <h1 class="title">公車<span>計程車</span></h1>
      <div class="login" @click="userStore.isAuthenticated ? signOut() : signInWithGoogle()">
        <el-icon size="36" color="#ffffff">
          <User />
        </el-icon>
        <span>{{ userStore.isAuthenticated ? '登出' : '登入' }}</span>
      </div>
    </template>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100vw;
  max-width: var(--width);
  height: 100px;
  padding: 0 30px;
  background-color: var(--dark-green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
}

nav .title {
  font-weight: bold;
  color: #ffffff;
  font-size: 40px;
  letter-spacing: 1px;
}

nav .title span {
  font-weight: bold;
  color: var(--yellow);
}

nav .login {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
}

nav .login el-icon {
  margin-top: 12px;
}

nav .login span {
  font-size: 35px;
  color: #ffffff;
  /* text-decoration: underline; */
  /* text-underline-offset: 5px; */
}

nav el-icon.back {
  cursor: pointer;
}
</style>
