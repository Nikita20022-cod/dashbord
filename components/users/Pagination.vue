<script setup lang="ts">
const props = defineProps<{
  page: number
  pageSize: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const totalPages = computed(() =>
  props.total === 0
    ? 1
    : Math.ceil(props.total / props.pageSize)
)

function go(page: number) {
  if (page < 1 || page > totalPages.value) return
  emit('update:page', page)
}
</script>

<template>
  <div class="flex items-center justify-between px-6 py-4 border-t bg-white dark:bg-gray-700 dark:border-black">
    <div class="text-sm text-gray-500 dark:text-gray-100">
      Page {{ page }} of {{ totalPages }}
    </div>

    <div class="flex gap-2">
      <button
        class="px-3 py-1 rounded border text-sm disabled:opacity-40 dark:text-white"
        :disabled="page === 1"
        @click="go(page - 1)"
      >
        Prev
      </button>

      <button
        v-for="p in totalPages"
        :key="p"
        class="px-3 py-1 rounded border text-sm"
        :class="p === page
          ? 'bg-gray-900 dark:bg-gray-500 text-white'
          : 'hover:bg-gray-100 dark:bg-gray-300'"
        @click="go(p)"
      >
        {{ p }}
      </button>

      <button
        class="px-3 py-1 rounded border text-sm disabled:opacity-40 dark:text-white"
        :disabled="page === totalPages"
        @click="go(page + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>