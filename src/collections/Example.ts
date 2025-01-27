import { CollectionConfig } from 'payload'
import { validateRelationship } from './validations/validateRelationship'

export const Example: CollectionConfig = {
  slug: 'example',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'relationship',
      type: 'relationship',
      relationTo: 'relationship-test',
      validate: validateRelationship,
      admin: {
        components: {
          Field: '/collections/ui/RelationshipField',
        },
      },
    },
  ],
}
