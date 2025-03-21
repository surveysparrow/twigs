const path = require("path");

module.exports = {
  stories: [
    "../src/**/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/**/*.stories.mdx",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    config.resolve.alias["@src"] = path.resolve(__dirname, "../src");
    return config;
  },
};
