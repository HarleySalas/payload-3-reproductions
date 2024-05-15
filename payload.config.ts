import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { User } from '@/payload/collections/user'
import {
  COLLECTION_SLUG_MOVIE,
  COLLECTION_SLUG_THEATRE,
  COLLECTION_SLUG_UPLOAD,
  COLLECTION_SLUG_USER,
} from '@/payload/constants'
import { Movie } from '@/payload/collections/movie'
import { Theatre } from '@/payload/collections/theatre'
import { Upload } from '@/payload/collections/upload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Movie, Theatre, Upload, User],
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URI || '',
    },
  }),
  // db: mongooseAdapter({
  //   url: process.env.MONGODB_URI || '',
  // }),
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const { totalDocs: userCount } = await payload.count({
      collection: COLLECTION_SLUG_USER,
    })

    if (!userCount) {
      payload.logger.info('Seeding first user...')
      await payload.create({
        collection: COLLECTION_SLUG_USER,
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
        },
      })
    }

    const { totalDocs: movieCount } = await payload.count({
      collection: COLLECTION_SLUG_MOVIE,
    })
    const { totalDocs: theatreCount } = await payload.count({
      collection: COLLECTION_SLUG_THEATRE,
    })
    const { totalDocs: uploadCount } = await payload.count({
      collection: COLLECTION_SLUG_UPLOAD,
    })

    const theatreMap = new Map()

    if (!theatreCount) {
      payload.logger.info('Seeding Theatres...')
      await Promise.all([
        payload
          .create({
            collection: COLLECTION_SLUG_THEATRE,
            data: {
              name: 'Theatre A',
            },
          })
          .then((res) => theatreMap.set('theatreA', res.id)),
        payload
          .create({
            collection: COLLECTION_SLUG_THEATRE,
            data: {
              name: 'Theatre B',
            },
          })
          .then((res) => theatreMap.set('theatreB', res.id)),
      ])
    }

    const movieMap = new Map()

    if (!movieCount) {
      payload.logger.info('Seeding Movies...')
      await Promise.all([
        payload
          .create({
            collection: COLLECTION_SLUG_MOVIE,
            data: {
              title: 'Movie A',
              theatre: theatreMap.get('theatreA'),
            },
          })
          .then((res) => movieMap.set('movieA', res.id)),
        payload
          .create({
            collection: COLLECTION_SLUG_MOVIE,
            data: {
              title: 'Movie B',
              theatre: theatreMap.get('theatreB'),
            },
          })
          .then((res) => movieMap.set('movieB', res.id)),
      ])
    }

    const uploadMap = new Map()

    if (!uploadCount) {
      payload.logger.info('Seeding Uploads...')
      await Promise.all([
        payload
          .create({
            collection: COLLECTION_SLUG_UPLOAD,
            data: {
              title: 'Upload A',
              theatre: theatreMap.get('theatreA'),
            },
          })
          .then((res) => uploadMap.set('uploadA', res.id)),
        payload
          .create({
            collection: COLLECTION_SLUG_UPLOAD,
            data: {
              title: 'Upload B',
              theatre: theatreMap.get('theatreB'),
            },
          })
          .then((res) => uploadMap.set('uploadB', res.id)),
      ])
    }
  },
  sharp,
})
