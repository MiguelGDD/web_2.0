import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const clientId = process.env.NEXT_PUBLIC_CLIENT;


const client = createClient({
    projectId: clientId || "0",
    dataset: "production",
    useCdn: true,
    apiVersion: "2023-04-16",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

export default client