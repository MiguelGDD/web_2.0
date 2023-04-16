import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'works',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'string',
      }),
    defineField({
      name: 'project_images',
      title: 'Project images',
      type: 'array',
      of: [{type: 'reference', to: {type: 'project_images'}}],
    }),
  ],
})
