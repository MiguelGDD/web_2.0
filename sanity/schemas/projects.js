import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'sub_title',
      title: 'SubTitle',
      type: 'string',
    }),
    defineField({
      name: 'works',
      title: 'Works',
      type: 'array',
      of: [{type: 'reference', to: {type: 'works'}}],
    }),
  ],
})
