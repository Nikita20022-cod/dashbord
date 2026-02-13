export type OrderStatus = 'paid' | 'pending' | 'cancelled'

export type OrderItem = {
  name: string
  price: number
  qty: number
}

export type Order = {
  id: number
  customer: string
  email: string
  total: number
  status: OrderStatus
  date: string
  items: OrderItem[]
}

const orders: Order[] = [
  {
    id: 1001,
    customer: 'John Doe',
    email: 'john@example.com',
    total: 245.5,
    status: 'paid',
    date: '2024-01-12',
    items: [
      { name: 'MacBook Sleeve', price: 45.5, qty: 1 },
      { name: 'USB-C Hub', price: 200, qty: 1 }
    ]
  },
  {
    id: 1002,
    customer: 'Jane Smith',
    email: 'jane@example.com',
    total: 89.99,
    status: 'pending',
    date: '2024-01-13',
    items: [
      { name: 'Wireless Mouse', price: 45, qty: 2 }
    ]
  },
  {
    id: 1003,
    customer: 'Alex Brown',
    email: 'alex@example.com',
    total: 430,
    status: 'cancelled',
    date: '2024-01-14',
    items: [
      { name: 'Keyboard', price: 130, qty: 1 },
      { name: 'Monitor Stand', price: 300, qty: 1 }
    ]
  },
  {
    id: 1004,
    customer: 'Emily White',
    email: 'emily@example.com',
    total: 159.99,
    status: 'paid',
    date: '2024-01-15',
    items: [
      { name: 'Bluetooth Headphones', price: 159.99, qty: 1 }
    ]
  },
  {
    id: 1005,
    customer: 'Michael Green',
    email: 'michael@example.com',
    total: 320,
    status: 'paid',
    date: '2024-01-16',
    items: [
      { name: 'Mechanical Keyboard', price: 180, qty: 1 },
      { name: 'Desk Mat', price: 140, qty: 1 }
    ]
  },
  {
    id: 1006,
    customer: 'Sarah Johnson',
    email: 'sarah@example.com',
    total: 59.99,
    status: 'pending',
    date: '2024-01-17',
    items: [
      { name: 'USB Flash Drive', price: 29.99, qty: 2 }
    ]
  },
  {
    id: 1007,
    customer: 'Daniel Lee',
    email: 'daniel@example.com',
    total: 799,
    status: 'paid',
    date: '2024-01-18',
    items: [
      { name: '27" Monitor', price: 799, qty: 1 }
    ]
  },
  {
    id: 1008,
    customer: 'Olivia Brown',
    email: 'olivia@example.com',
    total: 210,
    status: 'cancelled',
    date: '2024-01-19',
    items: [
      { name: 'Webcam', price: 110, qty: 1 },
      { name: 'Ring Light', price: 100, qty: 1 }
    ]
  },
  {
    id: 1009,
    customer: 'Chris Wilson',
    email: 'chris@example.com',
    total: 129.99,
    status: 'paid',
    date: '2024-01-20',
    items: [
      { name: 'External SSD', price: 129.99, qty: 1 }
    ]
  },
  {
    id: 1010,
    customer: 'Anna Taylor',
    email: 'anna@example.com',
    total: 74.5,
    status: 'pending',
    date: '2024-01-21',
    items: [
      { name: 'Laptop Stand', price: 74.5, qty: 1 }
    ]
  }
]

export function useOrders() {
  function getOrders() {
    return orders
  }

  function getOrderById(id: number) {
    return orders.find(o => o.id === id)
  }

  return {
    getOrders,
    getOrderById
  }
}