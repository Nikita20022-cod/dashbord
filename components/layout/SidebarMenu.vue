<script setup lang="ts">
import { useRoute } from 'vue-router'
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline'

const route = useRoute()

const menu = [
  { name: 'Dashboard', path: '/', icon: HomeIcon },
  { name: 'Users', path: '/users', icon: UsersIcon },
  { name: 'Orders', path: '/orders', icon: ShoppingBagIcon },
  { name: 'Analytics', path: '/analytics', icon: ChartBarIcon },
  { name: 'Settings', path: '/settings', icon: Cog6ToothIcon }
]

const isActive = (path: string) =>
  route.path === path || route.path.startsWith(path + '/')
</script>

<template>  
  <aside class="w-64 bg-gray-900 dark:bg-gray-700 text-gray-300 min-h-screen">
    <div class="p-6 text-xl font-bold text-white">
      Nuxt Dashboard
    </div>
      <nav class="md:px-3 space-y-1">
        <NuxtLink
          v-for="item in menu"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-2 rounded-lg transition"
          :class="isActive(item.path)
            ? 'bg-gray-800 text-white'
            : 'hover:bg-gray-800 hover:text-white'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          <span>{{ item.name }}</span>
        </NuxtLink>
      </nav>
  </aside>
</template>