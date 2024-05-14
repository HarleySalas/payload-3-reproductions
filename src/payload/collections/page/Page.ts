import { revalidateTag } from 'next/cache'
import { CollectionConfig } from 'payload/types'

export const COLLECTION_SLUG_PAGE = 'page'

export const Page: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
  hooks: {
    afterChange: [() => revalidateTag(COLLECTION_SLUG_PAGE)],
  },
  admin: {
    useAsTitle: 'title',
  },
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
