<script setup lang="ts">
const { stats } = useDashboardStats()
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold mb-6 dark:text-white">
      Static content
    </h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <DashboardKpiCard
        v-for="item in stats"
        :key="item.title"
        :title="item.title"
        :value="item.value"
        :change="item.change"
      />
    </div>
  </div>
</template>