import { CollectionConfig } from 'payload/types'
import { access } from '@/payload/access'
export const COLLECTION_SLUG_USER = 'user'

export const User: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  auth: true,
  access: {
    create: (args) => access({ args }),
    read: (args) => access({ args, self: true }),
    update: (args) => access({ args }),
    delete: () => false,
  },
  fields: [
    {
      name: 'role',
      type: 'select',
      hasMany: false,
      defaultValue: 'user',
      options: [
        {
          label: 'User',
          value: 'user',
        },
        {
          label: 'Admin',
          value: 'admin',
        },
      ],
    },
  ],
}
