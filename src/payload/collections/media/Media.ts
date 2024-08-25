import { CollectionConfig } from 'payload'

export const COLLECTION_SLUG_MEDIA = 'media'

export const Media: CollectionConfig = {
  slug: COLLECTION_SLUG_MEDIA,
  upload: true,
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
}
