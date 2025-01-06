<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getReservations, type Reservations } from '@/api'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const reservations = ref<Reservations[]>([])

const prettyDate = (date: string) => {
  const d = new Date(date)
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`
}

onMounted(async () => {
  reservations.value = await getReservations(userStore.userProfile!.email)
})
</script>

<template>
  <div v-for="item in reservations" :key="item.date">
    <p>搭乘時間：{{ prettyDate(item.date) }}</p>
    <p>上車地點：{{ item.origin }}</p>
    <p>下車地點：{{ item.destination }}</p>
    <p>搭乘人數：{{ item.headcount }}</p>
    <p>搭乘金額：{{ item.fee }}</p>
    <p>節省碳排放：{{ item.carbonEmmision }}</p>
    <hr />
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
