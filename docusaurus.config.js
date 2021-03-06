module.exports = {
  title: 'Macalester Advancement Info Svcs',
  tagline: 'The tagline',
  url: 'https://macadv.github.io',
  // baseUrl: '/~advcs/docs/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon-32x32-7697ce38.png',
  organizationName: 'macadv', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Macalester Advancement Info Svcs',
      logo: {
        alt: 'Macalester Advancement Info Svcs Logo',
        src: 'img/favicon-32x32-7697ce38.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/macadv/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} MacAdv. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/MacAdv/docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [require.resolve('docusaurus-lunr-search')],
};
