import { CollectionConfig } from 'payload/types'
import { access } from '@/payload/access'

export const COLLECTION_SLUG_TAG = 'tag'

export const Tag: CollectionConfig = {
  slug: COLLECTION_SLUG_TAG,
  admin: {
    useAsTitle: 'title',
  },
  access: {
    create: (args) => access({ args, allowedRoles: ['user'] }), //users can create tags
    read: () => true, //anyone can read tags
    update: (args) => access({ args }), //only admins can modify tags once created
    delete: (args) => access({ args }), //only admins can delete tags
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
