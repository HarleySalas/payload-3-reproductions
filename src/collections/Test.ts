import { CollectionConfig } from 'payload'

export const Test: CollectionConfig = {
  slug: 'test',
  fields: [
    {
      name: 'example',
      type: 'text',
      admin: {
        components: {
          Field: '/collections/ui/ExampleField',
        },
      },
    },
  ],
}
