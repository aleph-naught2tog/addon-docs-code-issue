module.exports = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/*.stories.tsx',
    '../src/**/*.stories.jsx',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
      },
    },
  ],
};
