<script setup lang="ts">
import {ref, reactive} from "vue";

import SubmitButton from '../components/SubmitButton.vue';

const data = reactive({
  date: null,
  time: null,
  departure: null,
  destination: null,
  people: 1,
});

const stops = ref([
  'A', 'B', 'C', 'D', 'E'
]);

const estimation = ref({
  total: 10,
  saving: 5,
});

</script>

<template>
  <div class="input">
    <div class="input-title">
      搭乘日期
    </div>
    <div class="input-value">
      <el-date-picker
        v-model="data.date"
        type="date"
        placeholder="YYYY/MM/DD"
        size="large"
        format="YYYY/MM/DD"
        style="min-width: 180px; max-width: 240px; width: 50vw"
      >
      </el-date-picker>
    </div>
  </div>
  <div class="input">
    <div class="input-title">
      搭乘時間
    </div>
    <div class="input-value">
      <el-time-picker
        v-model="data.time"
        placeholder=""
        size="large"
        style="min-width: 180px; max-width: 240px; width: 50vw"
      />
    </div>
  </div>

  <hr>

  <div class="input">
    <div class="input-title">
      出發地
    </div>
    <div class="input-value">
      <el-select
        v-model="data.departure"
        placeholder="Select"
        size="large"
        style="min-width: 180px; max-width: 240px; width: 50vw"
      >
        <el-option
          v-for="item in stops"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>

  <div class="input">
    <div class="input-title">
      目的地
    </div>
    <div class="input-value">
      <el-select
        v-model="data.destination"
        placeholder="Select"
        size="large"
        style="min-width: 180px; max-width: 240px; width: 50vw"
      >
        <el-option
          v-for="item in stops"
          :key="item"
          :label="item"
          :value="item"
        />
      </el-select>
    </div>
  </div>

  <hr>

  <div class="input">
    <div class="input-title">
      乘車人數
    </div>
    <div class="input-value">
      <el-input-number
        v-model="data.people"
        :min="1"
        :max="99"
        size="large"
        style="min-width: 180px; max-width: 240px; width: 50vw" />
    </div>
  </div>

  <hr>

  <div class="estimation">
    <div>預估乘車時間：<span class="digit">{{ estimation.total }}</span>分鐘</div>
    <div>預估節省時間：<span class="digit">{{ estimation.saving }}</span>分鐘</div>
  </div>

  <SubmitButton />
</template>

<style scoped>
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.input .input-title {
  width: 50%;
  color: var(--dark-green-text);
  font-size: 30px;
  font-weight: bold;
  text-align-last: justify;
  line-height: 30px;
}

.input .input-value {
}

hr {
  border: none;
  height: 3px;
  background-color: var(--dark-green-text);
  margin: 25px 0;
}

.estimation {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 0;
  margin-bottom: 20px;
}

.estimation div {
  font-size: 28px;
  font-weight: bold;
  color: var(--dark-green-text);
  text-align: center;
  margin-bottom: 10px;
}

.estimation div .digit {
  display: inline-block;
  width: 70px;
  background-color: var(--dark-green-text);
  color: #ffffff;
  font-size: 36px;
  margin: 0 5px;
}
</style>
