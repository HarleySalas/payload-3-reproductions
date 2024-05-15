import { COLLECTION_SLUG_THEATRE, COLLECTION_SLUG_UPLOAD } from '@/payload/constants'
import { CollectionConfig } from 'payload/types'

export const Upload: CollectionConfig = {
  slug: COLLECTION_SLUG_UPLOAD,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'theatre',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_THEATRE,
      hasMany: false,
    },
  ],
}
