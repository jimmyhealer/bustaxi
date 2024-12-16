<script setup lang="ts">
import {reactive} from 'vue';

import SubmitButton from '../components/SubmitButton.vue';

const data = reactive({
  username: null,
  password: null,
});

</script>

<template>
  <div class="center">
    <h1>登入帳號</h1>
    <div class="input">
      <div class="input-title">
        帳號
      </div>
      <el-input
        v-model="data.username"
        placeholder="請輸入手機號碼"
      />
    </div>
    <div class="input">
      <div class="input-title">
        密碼
      </div>
      <el-input
        type="password"
        v-model="data.password"
      />
    </div>
    <div style="height: 30px"></div>
    <SubmitButton />
  </div>

</template>

<style scoped>

div.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 300px;
}

h1 {
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
}

.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.input .input-title {
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  width: 70px;
}
</style>