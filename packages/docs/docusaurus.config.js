// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Twigs - React UI component library',
  tagline: 'Twigs is a flexible, customizable and accessible React component library for building UIs. Comes with 30+ components and room for you to bring your own components, styles and themes.',
  favicon: 'https://site.surveysparrow.com/wp-content/uploads/2017/10/cropped-sparrow-transparent-32x32.png',

  // Set the production url of your site here
  url: 'https://twigs.surveysparrow.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'surveysparrow', // Usually your GitHub org/user name.
  projectName: 'twigs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // sidebarCollapsible: false,
          // sidebarCollapsed: false
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    '@docusaurus/theme-live-codeblock',
    require.resolve('docusaurus-lunr-search')
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     indexBlog: false,
    //   },
    // ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://static.surveysparrow.com/public-api/surveysparrow-developer-documenation.jpg',
      navbar: {
        title: 'Twigs',
        // logo: {
        //   alt: 'Twigs',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting Started',
          }
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} SurveySparrow`,
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Theming',
                to: '/docs/theming',
              },
              {
                label: 'Components',
                to: '/docs/category/components',
              },
              {
                label: 'Examples',
                to: '/docs/category/examples',
              }
            ],
          },
          {
            title: 'Overlay',
            items: [
              {
                label: 'Dialog',
                to: '/docs/components/dialog',
              },
              {
                label: 'Drawer',
                to: '/docs/components/Drawer',
              },
              {
                label: 'Popover',
                to: '/docs/components/popover',
              },
            ],
          },
          {
            title: 'Layout',
            items: [
              {
                label: 'Grid',
                to: '/docs/components/grid',
              },
              {
                label: 'Flex',
                to: '/docs/components/flex',
              },
              {
                label: 'Box',
                to: '/docs/components/box',
              },
            ]
          },
          {
            title: 'Form',
            items: [
              {
                label: 'Checkbox',
                to: '/docs/components/checkbox',
              },
              {
                label: 'Radio',
                to: '/docs/components/radio',
              },
              {
                label: 'Select',
                to: '/docs/components/select',
              },
            ]
          }
        ]
      },
      colorMode: {
        disableSwitch: true
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'top',
      }
    }),
};

module.exports = config;
