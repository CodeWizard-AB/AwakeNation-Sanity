import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'eventType',
  title: 'Event Type',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Type Title',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'registrationFields',
      title: 'Registration Form Fields',
      type: 'array',
      of: [
        defineField({
          name: 'fieldDefinition',
          title: 'Field Definition',
          type: 'object',
          fields: [
            defineField({
              name: 'fieldName',
              title: 'Field Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'fieldLabel',
              title: 'Field Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'fieldType',
              title: 'Field Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Text Input', value: 'string'},
                  {title: 'Number Input', value: 'number'},
                  {title: 'Email Input', value: 'email'},
                  {title: 'Phone Number', value: 'tel'},
                  {title: 'Text Area', value: 'text'},
                  {title: 'Checkbox', value: 'boolean'},
                  {title: 'Date Picker', value: 'date'},
                  {title: 'Time Picker', value: 'time'},
                  {title: 'Select (Dropdown)', value: 'select'},
                  {title: 'Multi-select (Checkboxes)', value: 'multiSelect'},
                  {title: 'File Upload', value: 'file'},
                  {title: 'Array of Objects', value: 'objectArray'},
                ],
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'required',
              title: 'Required',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'options',
              title: 'Options (for select/multi-select)',
              type: 'array',
              of: [{type: 'string'}],
              hidden: ({parent}) => !['select', 'multiSelect'].includes(parent?.fieldType || ''),
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder Text',
              type: 'string',
              hidden: ({parent}) => parent?.fieldType === 'boolean',
            }),
            defineField({
              name: 'validation',
              title: 'Validation Rules',
              type: 'array',
              of: [
                defineField({
                  name: 'rule',
                  title: 'Validation Rule',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'type',
                      title: 'Rule Type',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Required', value: 'required'},
                          {title: 'Min Length', value: 'minLength'},
                          {title: 'Max Length', value: 'maxLength'},
                          {title: 'Pattern', value: 'pattern'},
                          {title: 'Min Value', value: 'minValue'},
                          {title: 'Max Value', value: 'maxValue'},
                        ],
                      },
                    }),
                    defineField({
                      name: 'value',
                      title: 'Rule Value',
                      type: 'string',
                    }),
                  ],
                }),
              ],
            }),
            defineField({
              name: 'subFields',
              title: 'Sub-Fields',
              type: 'array',
              of: [
                defineField({
                  name: 'subFieldDefinition',
                  title: 'Sub-Field Definition',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'fieldName',
                      title: 'Sub-Field Name',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'fieldLabel',
                      title: 'Sub-Field Label',
                      type: 'string',
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'fieldType',
                      title: 'Sub-Field Type',
                      type: 'string',
                      options: {
                        list: [
                          {title: 'Text Input', value: 'string'},
                          {title: 'Number Input', value: 'number'},
                          {title: 'Email Input', value: 'email'},
                          {title: 'Phone Number', value: 'tel'},
                          {title: 'Text Area', value: 'text'},
                          {title: 'Checkbox', value: 'boolean'},
                          {title: 'Date Picker', value: 'date'},
                          {title: 'Time Picker', value: 'time'},
                          {title: 'Select (Dropdown)', value: 'select'},
                          {title: 'Multi-select (Checkboxes)', value: 'multiSelect'},
                          {title: 'File Upload', value: 'file'},
                        ],
                      },
                      validation: (rule) => rule.required(),
                    }),
                    defineField({
                      name: 'required',
                      title: 'Required',
                      type: 'boolean',
                      initialValue: false,
                    }),
                    defineField({
                      name: 'options',
                      title: 'Options (for select/multi-select)',
                      type: 'array',
                      of: [{type: 'string'}],
                      hidden: ({parent}) =>
                        !['select', 'multiSelect'].includes(parent?.fieldType || ''),
                    }),
                    defineField({
                      name: 'placeholder',
                      title: 'Placeholder Text',
                      type: 'string',
                      hidden: ({parent}) => parent?.fieldType === 'boolean',
                    }),
                    defineField({
                      name: 'validation',
                      title: 'Validation Rules',
                      type: 'array',
                      of: [
                        defineField({
                          name: 'rule',
                          title: 'Validation Rule',
                          type: 'object',
                          fields: [
                            defineField({
                              name: 'type',
                              title: 'Rule Type',
                              type: 'string',
                              options: {
                                list: [
                                  {title: 'Required', value: 'required'},
                                  {title: 'Min Length', value: 'minLength'},
                                  {title: 'Max Length', value: 'maxLength'},
                                  {title: 'Pattern', value: 'pattern'},
                                  {title: 'Min Value', value: 'minValue'},
                                  {title: 'Max Value', value: 'maxValue'},
                                ],
                              },
                            }),
                            defineField({
                              name: 'value',
                              title: 'Rule Value',
                              type: 'string',
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
              hidden: ({parent}) => parent?.fieldType !== 'objectArray',
            }),
          ],
          preview: {
            select: {
              title: 'fieldLabel',
              subtitle: 'fieldType',
            },
            prepare({title, subtitle}) {
              return {
                title: title || 'Untitled Field',
                subtitle: subtitle || 'No Type',
              }
            },
          },
        }),
      ],
    }),
  ],
})
