import {defineField, defineType} from 'sanity'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'reference',
      to: [{type: 'eventType'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Start Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'eventEndDate',
      title: 'Event End',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'registrationOpen',
      title: 'Registration Open',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'date',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Event Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'fee',
      title: 'Registration Fee',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
  ],
})
