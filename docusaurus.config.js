// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Projet d'établissement 2024-2028 de l'Abes",
    tagline: '',

    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://PROJET2024_HTTP_BASEURL__PLACEHOLDER',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',
    trailingSlash: false,
    
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'abes-esr', // Usually your GitHub org user name.
    projectName: 'projet2024', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en']
    },
    
    // pour avoir la possibilité de faire des diagrames de gantt dans le markdown
    // exemple: https://docusaurus.io/fr/tests/pages/diagrams#gantt-chart
    // cf https://docusaurus.io/fr/docs/next/markdown-features/diagrams
    // markdown: {
    //     mermaid: false,
    // },
    // themes: ['@docusaurus/theme-mermaid'],

    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            ({
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                indexBlog: false,
            })
        ]
        ,
        'docusaurus-plugin-matomo',
    ],
    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
               docs: {
                 sidebarPath: require.resolve('./sidebars.js'),
                 includeCurrentVersion: false,
                   versions: {
                        '2.4': {
                            label: 'version 2.4 finale',
                            path: '2.4',
                        },
                        '2.2': {
                            label: 'version 2.2 archivée',
                            path: '2.2',
                        },
                        '1.1': {
                            label: 'version 1.1 archivée',
                            path: '1.1',
                        },
                    },
               },
               blog: false,
               theme: {
                    customCss: require.resolve('./src/css/custom.css'),
               },

            })
        ],
    ],




    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // options pour le plugin gantt
            // mermaid: {
            //     options: {
            //     },
            // },
            // Replace with your project's social card
            //  image: 'img/docusaurus-social-card.jpg',
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            navbar: {
                title: 'Projet d\'établissement de l\'Abes',
                logo: {
                    alt: 'Logo Abes',
                    src: 'img/logo-abes-cercle-130x130.svg',
                    //  href: 'https://abes.fr/',
                    //     target: '_self',
                },
                items: [
                    /*{
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Historique des versions',
                    },*/
                    {
                        type: 'docsVersionDropdown',
                        position: 'left',
                        //dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
                        dropdownActiveClassDisabled: false,
                    },
                    {
                        type: 'html',
                        position: 'left',
                        value:'<img src="/img/annotation.svg" alt=" " width="15rem" />',
                        className: 'padding-right--xs'
                    },
                    {
                        position: 'left',
                        label: 'Commentaires publics', // #TODO
                        to: '/public-comments',
                        className: 'padding-left--xs'
                    },
                    /*
                    {
                        type: 'html',
                       // sidebarId: 'tutorialSidebar',
                        position: 'left',
                      //  label: 'Comment ajouter vos commentaires',
                        value:'<a href="/howTo" class="navbar__item navbar__link"> <img src="/img/annotation.svg" alt=" " width="15rem" /> Comment commenter ?</a>'
                    },
                    */{
                        "type": "search",
                        "position": "right"
                    },
                    {
                        type: 'localeDropdown',
                        position: 'right'
                    },
                    {
                          href: 'https://github.com/abes-esr/projet2024',
                          label: 'GitHub',
                          position: 'right',
                    },
                ],
            },
            footer: {
                style: 'light',
                logo: {
                    alt: 'Logo Abes',
                    src: 'img/logo-abes-cercle-130x130.svg',
                    href: 'https://abes.fr/',
                    target: '_new',
                    width: 50,
                    height: 50,
                },

                copyright: `Agence bibliographique de l\'enseignement supérieur`,
                
                links: [
/*
                    {
// paramétrage du panneau des commentaires de l'outil hypothes.is
// cette méthode permet d'y ajouter toute la configuration souhaitée
// https://h.readthedocs.io/projects/client/en/latest/publishers/config.html
                        html: `
<script type="application/json" class="js-hypothesis-config">
  {
    "openSidebar": false
  }
</script>
                          `,
                    },
*/
                ],

            },

            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },

            matomo: {
                matomoUrl: 'https://piwik.abes.fr/',
                siteId: '37',
                phpLoader: 'matomo.php',
                jsLoader: 'matomo.js',
            },
        }),

/*
    // inclusion du panneau des commentaires de l'outil hypothes.is
    // cf lignes plus haut pour la configuration
    scripts: [
        {
            src: 'https://hypothes.is/embed.js',
            async: true
        },
        {
            src: '/force-hypotheseis-highlight.js',
            async: true
        },
    ]
*/

};

module.exports = config;
