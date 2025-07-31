import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'AwakeNation-Sanity',

  projectId: 'n9qxwmen',
  dataset: 'production',

  plugins: [
    visionTool(),
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Event')
              .child(
                S.documentTypeList('category')
                  .title('Event Categories')
                  .child((categoryId) =>
                    S.documentTypeList('event')
                      .title('Events by Category')
                      .filter(`type == event && category._ref == $categoryId`)
                      .params({categoryId}),
                  ),
              ),
            S.listItem()
              .title('Event Type')
              .child(
                S.documentTypeList('category')
                  .title('Event Categories')
                  .child((categoryId) =>
                    S.documentTypeList('eventType')
                      .title('Event Types by Category')
                      .filter(`type == eventType && category._ref == $categoryId`)
                      .params({categoryId}),
                  ),
              ),
            S.listItem()
              .title('Registration')
              .child(
                S.documentTypeList('category')
                  .title('Registrations by Category')
                  .child((categoryId) =>
                    S.documentList()
                      .title('Events in Category')
                      .filter('_type == "event" && category._ref == $categoryId')
                      .params({categoryId})

                      .child((eventId) =>
                        S.documentList()
                          .title('Registrations for Event')
                          .filter('_type == "registration" && event._ref == $eventId')
                          .params({eventId}),
                      ),
                  ),
              ),
            ...S.documentTypeListItems().filter(
              (listItem) => !['event', 'eventType', 'registration'].includes(listItem.getId()!),
            ),
          ]),
    }),
  ],

  schema: {types: schemaTypes},
})
