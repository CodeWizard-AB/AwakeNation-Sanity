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
    structureTool({
      name: 'studio',
      title: 'Studio',
      structure(S) {
        return S.list()
          .title('Documents')
          .items([
            S.divider(),
            S.listItem()
              .title('Event')
              .child(
                S.documentTypeList('category')
                  .title('Event Categories')
                  .child((categoryId) =>
                    S.documentList()
                      .title('Events')
                      .filter('_type == "event" && eventCategory._ref == $categoryId')
                      .params({categoryId}),
                  ),
              ),
            S.listItem().title('Team').child(S.documentTypeList('team').title('Team Members')),
            S.listItem()
              .title('Category')
              .child(S.documentTypeList('category').title('Categories')),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {types: schemaTypes},
})
