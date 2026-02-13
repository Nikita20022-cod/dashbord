<script setup lang="ts">
import { useOrders } from '~/composables/useOrders'
import { getOrderStatusClasses } from '~/utils/orderStatus'

const { getOrders } = useOrders()

const orders = getOrders()
const router = useRouter()
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
      Dynamic pages
    </h1>

    <div class="bg-white rounded-lg shadow overflow-hidden dark:bg-gray-800">
      <table class="w-full text-sm text-gray-700 dark:text-gray-200">
        <thead
          class="bg-gray-50 text-gray-500 uppercase text-xs
                 dark:bg-gray-700 dark:text-gray-300"
        >
          <tr>
            <th class="px-6 py-3 text-left">Order</th>
            <th class="px-6 py-3 text-left">Customer</th>
            <th class="px-6 py-3 text-left">Date</th>
            <th class="px-6 py-3 text-right">Total</th>
            <th class="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b last:border-0
                   hover:bg-gray-50 dark:hover:bg-gray-700
                   dark:border-gray-700 transition cursor-pointer"
            @click="router.push(`/orders/${order.id}`)"
          >
            <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
              #{{ order.id }}
            </td>

            <td class="px-6 py-4">
              <div class="font-medium text-gray-900 dark:text-white">
                {{ order.customer }}
              </div>
              <div class="text-gray-500 text-xs dark:text-gray-400">
                {{ order.email }}
              </div>
            </td>

            <td class="px-6 py-4 text-gray-600 dark:text-gray-300">
              {{ order.date }}
            </td>

            <td class="px-6 py-4 text-right font-medium text-gray-900 dark:text-white">
              ${{ order.total.toFixed(2) }}
            </td>

            <td class="px-6 py-4">
              <span
                class="inline-flex px-2 py-1 rounded text-xs font-medium capitalize"
                :class="getOrderStatusClasses(order.status)"
              >
                {{ order.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>