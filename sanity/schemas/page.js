import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
          hotspot: true,
      }
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'reference', to: {type: 'about'}}],
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to: {type: 'projects'}}],
    }),
  ],
})
