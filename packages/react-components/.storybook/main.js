module.exports = {
  stories: [
    '../src/**/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
};
