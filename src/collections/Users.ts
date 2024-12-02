import { User } from '@/payload-types'
import type { CollectionConfig, FieldHook } from 'payload'

export const ensureFirstUserIsAdmin: FieldHook<User> = async ({ req, operation, value }) => {
  if (operation === 'create') {
    const { totalDocs: userCount } = await req.payload.count({ collection: 'users' })

    if (userCount === 0 && !(value || []).includes('admin')) {
      return [...(value || []), 'admin']
    }
  }
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: 'editor',
      required: true,
      hooks: {
        beforeValidate: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
    },
  ],
}
