module.exports = {
  stories: ["../src/stories/**/*.stories.(tsx|mdx)"],
  addons: [
    'storybook-addon-styled-component-theme/dist/register',
    '@storybook/addon-knobs',
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
  ],
};
