import {defineField, defineType} from 'sanity'

export const football = defineType({
  name: 'football',
  title: 'Football Event',
  type: 'document',
  fields: [
    defineField({
      name: 'eventName',
      title: 'Official Event Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'eventName', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'gameType',
      title: 'Game Type',
      type: 'string',
      options: {
        list: [
          {title: '11-a-side Football', value: '11Aside'},
          {title: 'Futsal Tournament', value: 'futsal'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tournamentType',
      title: 'Tournament Type',
      type: 'string',
      options: {
        list: [
          {title: 'Knockout', value: 'knockout'},
          {title: 'League', value: 'league'},
          {title: 'Group Stage + Knockout', value: 'groupKnockout'},
          {title: 'Friendly', value: 'friendly'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
})
