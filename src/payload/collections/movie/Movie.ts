import {
  COLLECTION_SLUG_MOVIE,
  COLLECTION_SLUG_THEATRE,
  COLLECTION_SLUG_UPLOAD,
} from '@/payload/constants'
import { CollectionConfig } from 'payload/types'

export const Movie: CollectionConfig = {
  slug: COLLECTION_SLUG_MOVIE,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'theatre',
          type: 'relationship',
          relationTo: COLLECTION_SLUG_THEATRE,
          hasMany: false,
          admin: {
            allowCreate: false,
            width: '50%',
          },
        },
        {
          name: 'upload',
          type: 'relationship',
          relationTo: COLLECTION_SLUG_UPLOAD,
          admin: {
            allowCreate: false,
            width: '50%',
          },
          unique: true,
          filterOptions: ({ data }) => {
            if (data.theatre) {
              return {
                theatre: {
                  equals: data.theatre,
                },
              }
            } else return false
          },
        },
      ],
    },
  ],
}
