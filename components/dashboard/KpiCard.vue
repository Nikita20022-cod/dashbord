<script setup lang="ts">
defineProps<{
  title: string
  value: string | number
  change?: string
}>()
</script>

<template>
  <div class="bg-white dark:bg-gray-700 rounded-xl shadow-sm p-6">
    <div class="text-sm text-gray-500 dark:text-gray-300">
      {{ title }}
    </div>

    <div class="mt-2 flex items-end justify-between">
      <div class="text-2xl font-bold text-gray-900 dark:text-white">
        {{ value }}
      </div>

      <div
        v-if="change"
        class="text-sm text-green-600"
      >
        {{ change }}
      </div>
    </div>
  </div>
</template>