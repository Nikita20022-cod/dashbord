<script setup lang="ts">
import { Line } from 'vue-chartjs'
import type { ChartData } from 'chart.js'

defineProps<{
  data: ChartData<'line'>
  title: string
}>()
</script>

<template>
  <AnalyticsBaseChart :title="title" v-slot="{ options }">
    <Line :data="data" :options="options" />
  </AnalyticsBaseChart>
</template>