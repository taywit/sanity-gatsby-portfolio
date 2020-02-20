export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5e4e105299eb037a88441e3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-t6jq4wk4',
                  apiId: 'a6fc03e5-4a9d-416c-86c1-ce8f80993713'
                },
                {
                  buildHookId: '5e4e1053e8f7fbe5dbe31d0c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-998x8fqs',
                  apiId: '38d9dcd8-472e-49af-bff8-1f515137b984'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taywit/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-998x8fqs.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
