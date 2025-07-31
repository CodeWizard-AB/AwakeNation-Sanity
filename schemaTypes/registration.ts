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
      type: 'datetime',
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
        defineField({
          name: 'participantName',
          title: 'Participant Name',
          type: 'string',
          description: 'Full name of the person registering.',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'participantEmail',
          title: 'Participant Email',
          type: 'email',
          description: 'Email address of the participant.',
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'registrationData.participantName',
      subtitle: 'event.title',
      date: 'submittedAt',
    },
    prepare({title, subtitle, date}) {
      return {
        title: title || 'Unnamed Registration',
        subtitle: `${subtitle || 'No Event'} - ${date ? new Date(date).toLocaleDateString() : 'No Date'}`,
      }
    },
  },
})
