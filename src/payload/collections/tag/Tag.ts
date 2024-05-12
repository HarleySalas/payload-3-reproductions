import { CollectionConfig } from 'payload/types'
import { access } from '@/payload/access'

export const COLLECTION_SLUG_TAG = 'tag'

export const Tag: CollectionConfig = {
  slug: COLLECTION_SLUG_TAG,
  admin: {
    useAsTitle: 'title',
  },
  // // works in relationship! (boolean evaluation)
  // access: {
  // 	create: () => true,
  // 	read: () => true,
  // 	update: () => true,
  // 	delete: () => true,
  // },

  /**
   * Does not work in relationship!
   * Assumingly because it uses a query Object as a returned value,
   * as opposed to a boolean result.
   */
  access: {
    /**
     * Can open create modal
     * No save button
     */
    create: (args) => access({ args, allowedRoles: ['user'] }), //users can create tags
    read: () => true, //anyone can read tags
    /**
     * Update partially works. User role cannot update the related document,
     * however, they can open the update modal.
     */
    update: (args) => access({ args }), //only admins can modify tags once created
    delete: (args) => access({ args }), //only admins can delete tags
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
}
