<script setup lang="ts">
import { useUsers } from '~/composables/useUsers'

type UserStatus = 'active' | 'inactive' | 'pending'
type FilterStatus = UserStatus | 'all'

type User = {
  name: string
  email: string
  role: string
  status: UserStatus
}

const { users } = useUsers()

const STATUSES: FilterStatus[] = ['all', 'active', 'pending', 'inactive']

const statusFilter = ref<FilterStatus>('all')
const sortKey = ref<'name' | 'role'>('name')
const sortDir = ref<'asc' | 'desc'>('asc')

const page = ref(1)
const pageSize = 8

function toggleSort(key: 'name' | 'role') {
  if (sortKey.value === key) {
    sortDir.value = sortDir.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDir.value = 'asc'
  }
}

const filteredUsers = computed(() => {
  let result = [...users.value]

  if (statusFilter.value !== 'all') {
    result = result.filter(
      (u: User) => u.status === statusFilter.value
    )
  }

  result.sort((a: User, b: User) => {
    const aVal = String(a[sortKey.value]).toLowerCase()
    const bVal = String(b[sortKey.value]).toLowerCase()

    if (aVal < bVal) return sortDir.value === 'asc' ? -1 : 1
    if (aVal > bVal) return sortDir.value === 'asc' ? 1 : -1
    return 0
  })

  return result
})

const paginatedUsers = computed<User[]>(() => {
  const start = (page.value - 1) * pageSize
  return filteredUsers.value.slice(start, start + pageSize)
})

watch(filteredUsers, () => {
  const maxPage = Math.max(1, Math.ceil(filteredUsers.value.length / pageSize))
  if (page.value > maxPage) {
    page.value = maxPage
  }
})
</script>

<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Users</h1>

    <UsersFilters
      v-model="statusFilter"
      :statuses="STATUSES"
    />

    <div class="bg-white dark:bg-gray-700 rounded-lg shadow overflow-hidden">
      <table class="w-full text-sm">
        <UsersTableHead
          :sort-key="sortKey"
          :sort-dir="sortDir"
          @sort="toggleSort"
        />

        <tbody>
          <tr
            v-for="user in paginatedUsers"
            :key="user.email"
            class="hover:bg-gray-50 dark:hover:bg-gray-600 transition"
          >
            <td class="px-6 py-4 flex items-center gap-3">
              <UsersAvatar :name="user.name" />
              <span class="font-medium dark:text-gray-100">
                {{ user.name }}
              </span>
            </td>

            <td class="px-6 py-4 text-gray-600 dark:text-gray-300">
              {{ user.email }}
            </td>

            <td class="px-6 py-4 dark:text-white">
              {{ user.role }}
            </td>

            <td class="px-6 py-4">
              <UsersStatusBadge :status="user.status" />
            </td>
          </tr>

          <tr v-if="paginatedUsers.length === 0">
            <td
              colspan="4"
              class="px-6 py-8 text-center text-gray-500"
            >
              No users found
            </td>
          </tr>
        </tbody>
      </table>

      <UsersPagination
        v-model:page="page"
        :page-size="pageSize"
        :total="filteredUsers.length"
      />
    </div>
  </div>
</template>