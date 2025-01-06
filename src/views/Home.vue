<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const station = ref('捷運府中站')
const suggestions = reactive([
  {
    location: '南門街',
    estimation: '220m(步行3分鐘)',
  },
  {
    location: '悅喜商務飯店',
    estimation: '210m(步行3分鐘)',
  },
  {
    location: '後站商圈',
    estimation: '400m(步行7分鐘)',
  },
])
</script>

<template>
  <div class="location">
    <div class="key">目前所在位置</div>
    <div class="value">{{ station }}</div>
  </div>

  <div class="menu">
    <div class="item" @click="router.push('/map')">
      <el-icon size="50" color="var(--green-text)">
        <Van />
      </el-icon>
      <span> 立即搭乘 </span>
    </div>
    <div class="item" @click="router.push('/map')">
      <el-icon size="50" color="var(--green-text)">
        <Clock />
      </el-icon>
      <span> 預約搭乘 </span>
    </div>
  </div>
  <hr />
  <div class="suggestion">
    <h2>
      <el-icon size="40">
        <Location />
      </el-icon>
      附近建議上車地點
    </h2>

    <ul>
      <li v-for="suggestion in suggestions" :key="suggestion.location">
        <span>{{ suggestion.location }}</span>
        <span>{{ suggestion.estimation }}</span>
      </li>

      <li class="more">查看附近更多站牌</li>
    </ul>
  </div>
</template>

<style scoped>
.location {
  width: 100%;
  background-color: var(--light-green);
  font-size: 25px;
  display: flex;
  border-radius: 10px;
  border: solid 1px var(--green-text);
  color: #ffffff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  margin-bottom: 30px;
}

.location .key {
  flex: 1;
  font-weight: bold;
  color: var(--dark-green-text);
  border-right: solid 1px var(--green-text);
}

.location .value {
  flex: 1;
  color: var(--green-text);
}

.menu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
  user-select: none;
}

.menu .item {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--light-green);
  border-radius: 10px;
  border: solid 1px var(--green-text);
  padding: 15px 0;
  cursor: pointer;
}

.menu .item span {
  font-size: 30px;
  color: var(--green-text);
  font-weight: bold;
  line-height: 30px;
}

hr {
  border: none;
  height: 3px;
  background-color: var(--dark-green-text);
  margin: 20px 0;
}

.suggestion h2 {
  font-size: 30px;
  font-weight: bold;
  color: var(--dark-green-text);
  text-align: center;
  margin-bottom: 15px;
}

.suggestion ul {
  list-style: none;
  width: 100%;
  padding: 0 10px;
  margin: 0;
}

.suggestion ul li {
  width: 100%;
  color: var(--green-text);
  border-bottom: solid 2px var(--green-text);
  font-size: 25px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.suggestion ul li:last-child {
  margin-bottom: 0;
}

.suggestion ul li.more {
  color: var(--gray-text);
}
</style>
