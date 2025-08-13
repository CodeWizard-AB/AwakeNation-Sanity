import {defineField, defineType} from 'sanity'

export const registration = defineType({
  name: 'registration',
  title: 'Registration',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      title: 'Event',
      type: 'reference',
      to: [{type: 'event'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'date',
      readOnly: true,
      initialValue: new Date().toISOString(),
    }),
    defineField({
      name: 'registrationData',
      title: 'Registration Data',
      type: 'object',
      fields: [
        defineField({
          name: 'note',
          title: 'Internal Note',
          type: 'string',
          readOnly: true,
          hidden: true,
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),
  ],
  preview: {
    select: {
      title: 'registrationData.teamName',
      date: 'submittedAt',
    },
    prepare({title, date}) {
      return {
        title: title || 'Unnamed Registration',
        subtitle: `${date ? new Date(date).toLocaleDateString() : 'No Date'}`,
      }
    },
  },
})
