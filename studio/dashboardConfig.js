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
                  buildHookId: '602bfe339f36d464a62cedf4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ubg3sfhm',
                  apiId: '73c85849-c5ed-4295-b72b-01a0e79e39ce'
                },
                {
                  buildHookId: '602bfe33b708aa63605844ab',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-sqmkp2jm',
                  apiId: '7cc32119-b273-49fa-a09f-adf5441724f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kyleh/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-sqmkp2jm.netlify.app', category: 'apps'}
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
