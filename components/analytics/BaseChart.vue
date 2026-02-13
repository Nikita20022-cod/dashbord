<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = defineProps<{
  title: string
}>()

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

const textColor = computed(() =>
  isDark.value ? '#D1D5DB' : '#6B7280'
)

const options = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: textColor.value
      }
    },
    title: {
      display: true,
      text: props.title,
      color: textColor.value
    }
  },
  scales: {
    x: {
      ticks: { color: textColor.value },
      grid: { display: false }
    },
    y: {
      ticks: { color: textColor.value },
      grid: { color: 'rgba(156,163,175,0.2)' }
    }
  }
}))
</script>

<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 h-[360px]">
    <slot :options="options" />
  </div>
</template>