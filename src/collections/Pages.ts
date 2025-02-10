import { CollectionConfig } from "payload";

export const Pages: CollectionConfig = {
	slug: "pages",
	versions: {
		drafts: {
			autosave: {
				interval: 100
			}
		}
	},
	fields: [
		{
			name: "title",
			type: "text",
		}
	]
}