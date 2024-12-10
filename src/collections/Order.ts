import { CollectionConfig } from 'payload'

export const Order: CollectionConfig = {
  slug: 'order',
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'product',
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customer',
    },
    {
      name: 'paymentStatus',
      type: 'select',
      defaultValue: 'awaiting',
      options: [
        {
          label: 'Canceled',
          value: 'canceled',
        },
        {
          label: 'Awaiting Payment',
          value: 'awaiting',
        },
        {
          label: 'Captured',
          value: 'captured',
        },
        {
          label: 'Refunded',
          value: 'refunded',
        },
      ],
    },
  ],
}
