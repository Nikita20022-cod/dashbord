<script setup lang="ts">
import { Bar } from 'vue-chartjs'
import type { ChartData } from 'chart.js'

defineProps<{
  data: ChartData<'bar'>
  title: string
}>()
</script>

<template>
  <AnalyticsBaseChart :title="title" v-slot="{ options }">
    <Bar :data="data" :options="options" />
  </AnalyticsBaseChart>
</template>