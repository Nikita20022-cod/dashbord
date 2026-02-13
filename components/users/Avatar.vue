<script setup lang="ts">
const props = defineProps<{
  name: string
}>()

const initials = computed(() => {
  if (!props.name) return ''

  return props.name
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
})
</script>

<template>
  <div
    class="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs font-semibold"
  >
    {{ initials }}
  </div>
</template>