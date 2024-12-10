import { CollectionConfig } from 'payload'

export const Customer: CollectionConfig = {
  slug: 'customer',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'email',
      type: 'text',
      required: true,
    },
  ],
}
