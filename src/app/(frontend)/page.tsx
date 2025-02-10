import React from 'react'
import { getPayload } from 'payload'
import config from '@payload-config';

const Homepage = async () => {
	const payload = await getPayload({config})
	// const page = await payload.findByID({
	// 	collection: "pages",
	// 	id: "1dd23f92-8d9d-4e3c-a898-d6400c96efd0",
	// 	draft: false
	// })

	const pages = await payload.find({
		collection: "pages",
		limit: 1,
		draft: false
	})

	const page = pages.docs[0]

	return (
		<main>
			<div>This is the page title:</div>
			<div>{page.title}</div>
		</main>
	)
}

export default Homepage