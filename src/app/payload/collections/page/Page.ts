import {
  BlocksFeature,
  FeatureProviderServer,
  LexicalBlock,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { Block, CollectionConfig } from 'payload/types'

export const COLLECTION_SLUG_PAGE = 'page'

export const LoginModule: Block = {
  slug: 'login-module',
  fields: [
    {
      name: 'subtitle',
      type: 'richText',
      localized: true,
      editor: lexicalEditor(),
    },
  ],
}

export const Module: LexicalBlock = {
  slug: 'module',
  interfaceName: 'Module',
  fields: [
    {
      name: 'module',
      type: 'blocks',
      maxRows: 1,
      blocks: [LoginModule],
    },
  ],
}

export const Page: CollectionConfig = {
  slug: COLLECTION_SLUG_PAGE,
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({ blocks: [Module] }) as FeatureProviderServer<unknown, unknown>,
        ],
      }),
    },
  ],
}
