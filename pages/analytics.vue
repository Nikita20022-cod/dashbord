<script setup lang="ts">
const { revenueData, ordersData } = useAnalytics()
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6 dark:text-white">
      Analytics
    </h1>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <AnalyticsLineChart
        :data="revenueData"
        title="Weekly Revenue"
      />

      <AnalyticsBarChart
        :data="ordersData"
        title="Monthly Orders"
      />
    </div>
  </div>
</template>