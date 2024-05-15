import { COLLECTION_SLUG_USER } from '@/payload/constants'
import { CollectionConfig } from 'payload/types'

export const User: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  auth: true,
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [],
}
