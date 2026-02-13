<script setup lang="ts">
const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
    <h1 class="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
    <p class="text-xl text-gray-700 dark:text-gray-300 mb-6">
      Страница не найдена
    </p>
    <button
      @click="goHome"
      class="px-6 py-3 bg-gray-900 dark:bg-gray-500 text-white rounded hover:bg-gray-800 transition"
    >
      На главную
    </button>
  </div>
</template>