import { CollectionConfig } from 'payload'

export const COLLECTION_SLUG_USER = 'user'

export const User: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  auth: true,
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [],
}
