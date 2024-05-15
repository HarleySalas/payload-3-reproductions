import { COLLECTION_SLUG_THEATRE } from '@/payload/constants'
import { CollectionConfig } from 'payload/types'

export const Theatre: CollectionConfig = {
  slug: COLLECTION_SLUG_THEATRE,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
  ],
}
