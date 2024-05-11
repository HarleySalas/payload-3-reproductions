import { CollectionConfig } from 'payload/types'

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
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'user',
      unique: true,
    },
  ],
}
