<script setup lang="ts">
</script>

<template>
  <footer>
    <RouterLink to="/">
      <el-icon size="50" color="#ffffff">
        <HomeFilled />
      </el-icon>
      <span>
      首頁
      </span>
    </RouterLink>
    <RouterLink to="/reservation">
      <el-icon size="50" color="#ffffff">
        <CircleCheck />
      </el-icon>
      <span>
      我的預約
      </span>
    </RouterLink>
    <a href="">
      <el-icon size="50" color="#ffffff">
        <Bell />
      </el-icon>
      <span>
      最新消息
      </span>
    </a>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: var(--width);
  height: 100px;
  padding: 0 30px;
  background-color: var(--dark-green);
  display: flex;
  user-select: none;
}

footer a {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

footer a span {
  color: #ffffff;
  font-size: 24px;
  text-align: center;
}
</style>