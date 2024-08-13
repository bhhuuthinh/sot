// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kisara Board Game Cafe',
  tagline: 'Kisara Board Game Cafe',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://bhhuuthinh.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sot/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        // {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '',
        logo: {
          alt: 'Kisara Board Game Cafe',
          src: 'img/logo2.webp',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          // { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Liên kết',
            items: [
              {
                label: 'Website',
                to: 'http://kisara.vn',
              },
              {
                label: 'Hệ thống Admin',
                to: 'http://admin.kisara.vn',
              },
              {
                label: 'Shopee',
                to: 'https://shopee.vn/thinhcuaban',
              },
            ],
          },
          {
            title: 'Google Drive',
            items: [
              {
                label: 'Drive Tổng',
                href: 'https://drive.google.com/drive/folders/15vXPmg4tVUEufujScWvr2KJnV1XDeH--?usp=drive_link',
              },
              {
                label: 'In card (xóa file trong ngày nếu đã in xong)',
                to: 'https://drive.google.com/drive/folders/1XZDjiqKVm-H5JG1L--mdrJyZfZxSpolr?usp=drive_link',
              },
              {
                label: 'Ảnh sinh hoạt',
                to: 'https://drive.google.com/drive/folders/14mPNzk1qAJA7s-YN57sFwWs8Zxzd4gVr?usp=drive_link',
              },
              {
                label: 'Ảnh sinh hoạt',
                to: 'https://drive.google.com/drive/folders/14mPNzk1qAJA7s-YN57sFwWs8Zxzd4gVr?usp=drive_link',
              },
              {
                label: 'Ảnh sản phẩm',
                to: 'https://drive.google.com/drive/folders/11rmdHXldUKfGwsd0E9PgRJX54D8YpAFx?usp=drive_link',
              },
              {
                label: 'Set card',
                to: 'https://drive.google.com/drive/folders/1UZg57dlAoca-DbXkH9jiSUN0N5QvxaH6?usp=drive_link',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kisara Board Game Cafe. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [require.resolve("@easyops-cn/docusaurus-search-local"),{docsRouteBasePath:'/'}]
  ],
};

export default config;
