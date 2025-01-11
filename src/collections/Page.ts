import { slug } from '@/fields/slug'
import { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'pathname', 'updatedAt', '_status'],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100,
      },
    },
    maxPerDoc: 50,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slug(),
  ],
}
