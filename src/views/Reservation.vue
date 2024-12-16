<script setup lang="ts">
import {reactive} from "vue";

const reservations = reactive([
  {
    time: '2024/07/08, 15:30',
    on: '捷運府中站',
    off: '溫泉旅店',
    people: 1,
    model: '7人座',
    plate: 'ABC-1234',
    saving: 15,
    amount: 50,
  }, {
    time: '2024/07/08, 15:30',
    on: '捷運府中站',
    off: '溫泉旅店',
    people: 1,
    model: '7人座',
    plate: 'ABC-1234',
    saving: 15,
    amount: 50,
  },
]);
</script>

<template>
  <div v-for="item in reservations">
    <p>搭乘時間：{{ item.time }}</p>
    <p>上車地點：{{ item.on }}</p>
    <p>下車地點：{{ item.off }}</p>
    <p>搭乘人數：{{ item.people }}</p>
    <p>搭乘車種：{{ item.model }}</p>
    <p>車牌號碼：{{ item.plate }}</p>
    <p>節省時間：{{ item.saving }}</p>
    <p>搭乘金額：{{ item.amount }}</p>
    <hr>
  </div>

</template>

<style scoped>

p {
  color: #000000;
  font-size: 18px;

}

hr {
  border: none;
  height: 3px;
  background-color: var(--dark-green-text);
  margin: 5px 0;
}
</style>