module.exports = {
  title: 'Le musée de l\'extraordinaire',
  tagline: 'Découvrez l\'art au travers d\'anecdotes !',
  url: 'https://github.com/amelie-chardon/',
  baseUrl: '/le-musee-de-lextraordinaire-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'amelie-chardon', // Usually your GitHub org/user name.
  projectName: 'le-musee-de-lextraordinaire-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Le musée de l\'extraordinaire',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/a_propos',
          activeBasePath: 'docs',
          label: 'Documentation',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Documentation API - Le Musée de l'extraordinaire, Inc. Built with Docusaurus.`,
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
            'https://github.com/amelie-chardon/le-musee-de-lextraordinaire-doc',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
