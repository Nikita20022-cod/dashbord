import { reactive } from 'vue'
import type { ChartData } from 'chart.js'

export function useAnalytics() {
  const revenueData = reactive<ChartData<'line'>>({
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenue',
        data: [120, 190, 300, 250, 220, 310, 400],
        borderColor: '#3B82F6',
        backgroundColor: 'rgba(59,130,246,0.15)',
        tension: 0.4,
        fill: true
      }
    ]
  })

  const ordersData = reactive<ChartData<'bar'>>({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Orders',
        data: [45, 78, 60, 92, 110],
        backgroundColor: '#10B981'
      }
    ]
  })

  return {
    revenueData,
    ordersData
  }
}