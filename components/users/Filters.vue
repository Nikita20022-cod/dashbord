<script setup lang="ts">
type FilterStatus = 'all' | 'active' | 'pending' | 'inactive'

defineProps<{
  modelValue: FilterStatus
  statuses: FilterStatus[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: FilterStatus): void
}>()
</script>

<template>
  <div class="flex gap-2 mb-4">
    <button
      v-for="s in statuses"
      :key="s"
      @click="emit('update:modelValue', s)"
      class="px-3 py-1 rounded text-sm capitalize transition"
      :class="[
        'px-3 py-1 rounded text-sm capitalize transition',
        modelValue === s
          ? 'bg-gray-900 dark:bg-gray-700 text-white'
          : 'bg-gray-100 dark:bg-gray-500 text-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
      ]"
    >
      {{ s }}
    </button>
  </div>
</template>