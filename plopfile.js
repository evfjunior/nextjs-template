module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Component creation template',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'generators/templates/base.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'generators/templates/index.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/stories.tsx',
        templateFile: 'generators/templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'generators/templates/test.tsx.hbs'
      }
    ]
  })
}
