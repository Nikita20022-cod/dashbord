<script setup lang="ts">
import { getOrderStatusClasses } from '~/utils/orderStatus'

definePageMeta({
  title: 'Order details'
})

const routerBack = useRouter()
const route = useRoute()

const { getOrderById } = useOrders()
const orderId = Number(route.params.id)

const order = computed<Order | undefined>(() =>
  getOrderById(orderId)
)

watch(order, (val) => {
  if (val) {
    useHead({
      title: `Order #${val.id}`
    })
  }
}, { immediate: true })
</script>

<template>
  <div v-if="order">
    <nav class="text-sm text-gray-500 dark:text-gray-400 mb-4">
      <NuxtLink
        to="/orders"
        class="hover:text-gray-700 dark:hover:text-gray-200"
      >
        Orders
      </NuxtLink>
      <span class="mx-1">/</span>
      <span class="text-gray-700 dark:text-gray-200 font-medium">
        #{{ order.id }}
      </span>
    </nav>

    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">
          Order #{{ order.id }}
        </h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ order.date }}
        </p>
      </div>

      <button
        class="text-sm text-gray-600 hover:text-black
               dark:text-gray-400 dark:hover:text-white"
        @click="routerBack.back()"
      >
        ← Back
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="bg-white rounded-lg shadow p-6 dark:bg-gray-800 dark:text-gray-200">
        <h2 class="font-medium mb-4 dark:text-white">
          Customer
        </h2>

        <p class="font-medium">{{ order.customer }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ order.email }}
        </p>

        <span
          class="inline-block mt-3 px-2 py-1 text-xs font-medium rounded capitalize"
          :class="getOrderStatusClasses(order.status)"
        >
          {{ order.status }}
        </span>
      </div>

      <div class="lg:col-span-2 bg-white rounded-lg shadow p-6 dark:bg-gray-800">
        <h2 class="font-medium mb-4 dark:text-white">
          Items
        </h2>

        <div class="space-y-3">
          <div
            v-for="item in order.items"
            :key="item.name"
            class="flex justify-between text-sm text-gray-700 dark:text-gray-300"
          >
            <span>
              {{ item.name }} × {{ item.qty }}
            </span>
            <span class="font-medium">
              ${{ (item.price * item.qty).toFixed(2) }}
            </span>
          </div>
        </div>

        <div
          class="border-t mt-4 pt-4 flex justify-between font-medium
                 border-gray-200 dark:border-gray-700
                 text-gray-900 dark:text-white"
        >
          <span>Total</span>
          <span>${{ order.total.toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Not found -->
  <div v-else class="text-center py-20 text-gray-700 dark:text-gray-300">
    <h2 class="text-xl font-semibold mb-2 dark:text-white">
      Order not found
    </h2>
    <NuxtLink
      to="/orders"
      class="text-blue-600 dark:text-blue-400 hover:underline"
    >
      Back to orders
    </NuxtLink>
  </div>
</template>