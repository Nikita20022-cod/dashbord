<script setup lang="ts">
defineProps<{
  sortKey: 'name' | 'role'
  sortDir: 'asc' | 'desc'
}>()

const emit = defineEmits<{
  (e: 'sort', key: 'name' | 'role'): void
}>()
</script>

<template>
  <thead class="bg-gray-50 dark:bg-gray-600 text-gray-500 dark:text-white uppercase text-xs">
    <tr>
      <th
        class="px-6 py-3 text-left cursor-pointer"
        @click="emit('sort', 'name')"
      >
        User
        <span v-if="sortKey === 'name'">
          {{ sortDir === 'asc' ? '↑' : '↓' }}
        </span>
      </th>

      <th class="px-6 py-3 text-left">Email</th>

      <th
        class="px-6 py-3 text-left cursor-pointer"
        @click="emit('sort', 'role')"
      >
        Role
        <span v-if="sortKey === 'role'">
          {{ sortDir === 'asc' ? '↑' : '↓' }}
        </span>
      </th>

      <th class="px-6 py-3 text-left">Status</th>
    </tr>
  </thead>
</template>