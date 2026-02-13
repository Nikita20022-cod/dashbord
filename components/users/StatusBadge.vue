<script setup lang="ts">
type UserStatus = 'active' | 'inactive' | 'pending'

const props = defineProps<{
  status: UserStatus
}>()
const STATUS_CLASSES: Record<UserStatus, string> = {
  active: 'bg-green-100 text-green-700',
  pending: 'bg-yellow-100 text-yellow-700',
  inactive: 'bg-red-100 text-red-700'
}

const classes = computed(() => STATUS_CLASSES[props.status])
</script>

<template>
  <span
    class="px-2 py-1 rounded-full text-xs font-medium capitalize"
    :class="classes"
  >
    {{ props.status }}
  </span>
</template>