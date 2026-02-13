<script setup lang="ts">
type Theme = 'light' | 'dark'

type Settings = {
  theme: Theme
  notifications: boolean
}

const props = withDefaults(
  defineProps<{
    modelValue?: Settings
  }>(),
  {
    modelValue: () => ({
      theme: 'light',
      notifications: true
    })
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: Settings): void
}>()

function update<K extends keyof Settings>(key: K, value: Settings[K]) {
  emit('update:modelValue', {
    ...props.modelValue,
    [key]: value
  })
}
</script>

<template>
  <div class="bg-white rounded-lg shadow p-6 dark:bg-gray-800">
    <h2 class="text-lg font-medium mb-4 dark:text-white">
      Preferences
    </h2>

    <div class="space-y-4">
      <div>
        <label class="block text-sm text-gray-600 mb-1 dark:text-gray-300">
          Theme
        </label>

        <select
          :value="props.modelValue.theme"
          @change="update('theme', ($event.target as HTMLSelectElement).value as Theme)"
          class="border rounded px-3 py-2 text-sm dark:bg-gray-700 dark:text-white"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div class="flex items-center gap-3">
        <input
          type="checkbox"
          :checked="props.modelValue.notifications"
          @change="update('notifications', ($event.target as HTMLInputElement).checked)"
        >
        <span class="text-sm text-gray-700 dark:text-gray-200">
          Enable notifications
        </span>
      </div>
    </div>
  </div>
</template>