export type UserStatus = 'active' | 'inactive' | 'pending'

export type User = {
  name: string
  email: string
  role: string
  status: UserStatus
}

export function useUsers() {
  const users = ref<User[]>([
    { name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active' },
    { name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'pending' },
    { name: 'Alex Brown', email: 'alex@example.com', role: 'Viewer', status: 'inactive' },
    { name: 'Emily White', email: 'emily@example.com', role: 'Editor', status: 'active' },

    { name: 'Michael Johnson', email: 'michael@example.com', role: 'Admin', status: 'active' },
    { name: 'Sarah Williams', email: 'sarah@example.com', role: 'Viewer', status: 'active' },
    { name: 'David Miller', email: 'david@example.com', role: 'Editor', status: 'inactive' },
    { name: 'Olivia Davis', email: 'olivia@example.com', role: 'Viewer', status: 'pending' },

    { name: 'Daniel Wilson', email: 'daniel@example.com', role: 'Editor', status: 'active' },
    { name: 'Sophia Moore', email: 'sophia@example.com', role: 'Viewer', status: 'active' },
    { name: 'James Taylor', email: 'james@example.com', role: 'Admin', status: 'inactive' },
    { name: 'Isabella Anderson', email: 'isabella@example.com', role: 'Editor', status: 'pending' },

    { name: 'William Thomas', email: 'william@example.com', role: 'Viewer', status: 'active' },
    { name: 'Mia Jackson', email: 'mia@example.com', role: 'Editor', status: 'active' },
    { name: 'Ethan Martin', email: 'ethan@example.com', role: 'Viewer', status: 'inactive' },
    { name: 'Ava Lee', email: 'ava@example.com', role: 'Editor', status: 'pending' },

    { name: 'Benjamin Perez', email: 'benjamin@example.com', role: 'Admin', status: 'active' },
    { name: 'Charlotte Thompson', email: 'charlotte@example.com', role: 'Viewer', status: 'active' },
    { name: 'Lucas Garcia', email: 'lucas@example.com', role: 'Editor', status: 'inactive' },
    { name: 'Amelia Martinez', email: 'amelia@example.com', role: 'Viewer', status: 'pending' },

    { name: 'Henry Robinson', email: 'henry@example.com', role: 'Editor', status: 'active' },
    { name: 'Harper Clark', email: 'harper@example.com', role: 'Viewer', status: 'active' },
    { name: 'Alexander Rodriguez', email: 'alexr@example.com', role: 'Admin', status: 'active' },
    { name: 'Evelyn Lewis', email: 'evelyn@example.com', role: 'Editor', status: 'inactive' },

    { name: 'Sebastian Walker', email: 'sebastian@example.com', role: 'Viewer', status: 'pending' },
    { name: 'Abigail Hall', email: 'abigail@example.com', role: 'Editor', status: 'active' },
    { name: 'Jack Allen', email: 'jack@example.com', role: 'Viewer', status: 'inactive' },
    { name: 'Ella Young', email: 'ella@example.com', role: 'Editor', status: 'active' },

    { name: 'Matthew King', email: 'matthew@example.com', role: 'Admin', status: 'active' },
    { name: 'Scarlett Wright', email: 'scarlett@example.com', role: 'Viewer', status: 'pending' },
    { name: 'Joseph Lopez', email: 'joseph@example.com', role: 'Editor', status: 'inactive' },
    { name: 'Grace Hill', email: 'grace@example.com', role: 'Viewer', status: 'active' },

    { name: 'Samuel Scott', email: 'samuel@example.com', role: 'Editor', status: 'active' },
    { name: 'Chloe Green', email: 'chloe@example.com', role: 'Viewer', status: 'active' },
    { name: 'Andrew Adams', email: 'andrew@example.com', role: 'Editor', status: 'pending' },
    { name: 'Victoria Baker', email: 'victoria@example.com', role: 'Viewer', status: 'inactive' }
  ])

  return {
    users
  }
}