module.exports = {
  addons: [
    'storybook-dark-mode',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links'
  ],
  core: {
    builder: '@storybook/builder-webpack5'
  },
  framework: '@storybook/react',
  staticDirs: ['../public'],
  stories: ['../src/components/**/stories.@(mdx|tsx)'],
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
