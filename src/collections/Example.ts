import { CollectionConfig } from 'payload'

export const Example: CollectionConfig = {
  slug: 'example',
  fields: [
    {
      name: 'example',
      type: 'text',
      admin: {
        components: {
          Field: '/collections/ui/ExampleComponent',
        },
      },
    },
  ],
}
