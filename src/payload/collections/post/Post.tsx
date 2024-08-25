import { CollectionConfig } from 'payload'

export const COLLECTION_SLUG_POST = 'post'

export const Post: CollectionConfig = {
  slug: COLLECTION_SLUG_POST,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
