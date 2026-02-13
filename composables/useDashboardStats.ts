type DashboardStat = {
  title: string
  value: string
  change: string
}

export function useDashboardStats() {
  const stats = ref<DashboardStat[]>([
    {
      title: 'Revenue',
      value: '$24,300',
      change: '+12%'
    },
    {
      title: 'Monthly Recurring Revenue',
      value: '$8,450',
      change: '+6%'
    },
    {
      title: 'Users',
      value: '1,245',
      change: '+8%'
    },
    {
      title: 'Active Users',
      value: '982',
      change: '+4%'
    },
    {
      title: 'New Signups',
      value: '143',
      change: '+15%'
    },
    {
      title: 'Orders',
      value: '356',
      change: '+5%'
    },
    {
      title: 'Completed Orders',
      value: '312',
      change: '+7%'
    },
    {
      title: 'Pending Orders',
      value: '29',
      change: '-3%'
    },
    {
      title: 'Cancelled Orders',
      value: '15',
      change: '-8%'
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+0.4%'
    },
    {
      title: 'Avg Order Value',
      value: '$68.20',
      change: '+2%'
    },
    {
      title: 'Customer Lifetime Value',
      value: '$540',
      change: '+5%'
    },
    {
      title: 'Churn Rate',
      value: '1.8%',
      change: '-0.3%'
    },
    {
      title: 'Returning Customers',
      value: '41%',
      change: '+3%'
    },
    {
      title: 'Support Tickets',
      value: '27',
      change: '-10%'
    },
    {
      title: 'Resolved Tickets',
      value: '23',
      change: '+12%'
    },
    {
      title: 'Avg Response Time',
      value: '1h 24m',
      change: '-18%'
    },
    {
      title: 'Server Uptime',
      value: '99.98%',
      change: '+0.01%'
    },
    {
      title: 'API Requests',
      value: '1.2M',
      change: '+9%'
    },
    {
      title: 'Error Rate',
      value: '0.12%',
      change: '-0.05%'
    }
  ])

  return {
    stats
  }
}