import path from 'path'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { en } from 'payload/i18n/en'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
// import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { buildConfig } from 'payload/config'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { Page } from '@/payload/collections/page'
import { Media } from '@/payload/collections/media'
import { Post } from '@/payload/collections/post'
import { Tag } from '@/payload/collections/tag'
import { User } from '@/payload/collections/user'
import { COLLECTION_SLUG_USER } from '@/payload/collections/user/User'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Page, Media, Post, Tag, User],
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

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en },
  },

  admin: {
    autoLogin: {
      //login to "user" role for reproduction
      email: 'user@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
  },
  async onInit(payload) {
    const { totalDocs: userCount } = await payload.count({
      collection: COLLECTION_SLUG_USER,
    })

    if (!userCount) {
      await payload.create({
        collection: COLLECTION_SLUG_USER,
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
          role: 'admin',
        },
      })

      //create user role account for reproduction
      await payload.create({
        collection: COLLECTION_SLUG_USER,
        data: {
          email: 'user@payloadcms.com',
          password: 'test',
          role: 'user',
        },
      })
    }
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable
  sharp,
})
