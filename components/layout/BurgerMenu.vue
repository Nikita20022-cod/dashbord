<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>  
    <div class="md:hidden pt-6 pr-6">
      <button
        @click="isOpen = true"
        class="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none flex ml-auto"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-black/40 z-50"
          @click="isOpen = false"
        ></div>
      </transition>

      <transition name="slide">
        <aside
          v-if="isOpen"
          class="fixed top-0 left-0 h-full bg-gray-900 dark:bg-gray-700 text-gray-300 z-50 p-6"
        >
          <button @click="isOpen = false" class="mb-4 text-white">
            Back
          </button>

          <LayoutSidebarMenu />
        </aside>
      </transition>
    </div>
</template>  

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.slide-enter-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>