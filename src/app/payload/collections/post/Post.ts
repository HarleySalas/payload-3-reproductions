import { CollectionConfig } from 'payload/types'
import { COLLECTION_SLUG_TAG } from '../tag/Tag'

export const COLLECTION_SLUG_POST = 'post'

export const Post: CollectionConfig = {
  slug: COLLECTION_SLUG_POST,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: COLLECTION_SLUG_TAG,
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
}
