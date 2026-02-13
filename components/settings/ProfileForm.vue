<script setup lang="ts">
type Settings = {
  name: string
  email: string
}

const props = withDefaults(
  defineProps<{
    modelValue?: Settings
  }>(),
  {
    modelValue: () => ({
      name: '',
      email: ''
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
      Profile
    </h2>

    <div class="space-y-4 max-w-md">
      <div>
        <label class="block text-sm text-gray-600 mb-1 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          :value="props.modelValue.name"
          @input="update('name', ($event.target as HTMLInputElement).value)"
          class="w-full border rounded px-3 py-2 text-sm dark:bg-gray-700 dark:text-white"
        >
      </div>

      <div>
        <label class="block text-sm text-gray-600 mb-1 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          :value="props.modelValue.email"
          disabled
          class="w-full border rounded px-3 py-2 text-sm bg-gray-100 dark:bg-gray-700 dark:text-gray-300"
        >
      </div>
    </div>
  </div>
</template>