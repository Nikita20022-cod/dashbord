export function getOrderStatusClasses(status: OrderStatus) {
  switch (status) {
    case 'paid':
      return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300'
    case 'pending':
      return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300'
    case 'cancelled':
      return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300'
  }
}