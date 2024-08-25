import { someServerFn } from '@/lib/someServerFn'
import { CollectionConfig } from 'payload'

export const COLLECTION_SLUG_USER = 'user'

export const User: CollectionConfig = {
  slug: COLLECTION_SLUG_USER,
  auth: {
    strategies: [
      {
        name: 'test',
        authenticate: async () => {
          //"someServerFn" has "import 'server-only' at the top of it's file"
          const { user } = await someServerFn()

          return {
            user: user ?? null,
          }
        },
      },
    ],
  },
  access: {
    delete: () => false,
    update: () => false,
  },
  fields: [],
}
