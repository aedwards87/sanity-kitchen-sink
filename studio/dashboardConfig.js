export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f98a73e801e7438f82f6a05',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cy2zqsze',
                  apiId: '00f6564c-b4b9-4879-adbc-1bc6f53baceb'
                },
                {
                  buildHookId: '5f98a73ec0c8e12ee2812c37',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-roaggaku',
                  apiId: '608e05c2-2741-49b9-96ff-e9b9dd89b7ad'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aedwards87/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-roaggaku.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
