import { CollectionConfig } from 'payload'

export const RelationshipTest: CollectionConfig = {
  slug: 'relationship-test',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
