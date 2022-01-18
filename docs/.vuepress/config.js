const sidebar = require('./sidebar.js');

module.exports = {
    base:'/',
    title: '(ÖHVPS) API İLKE VE KURALLARI',
    description: ' ',
    themeConfig: {
        nav: [
            { text: 'Hakkımda', link: '/pages/about_me.html'},
            { text: 'İletişim', link: '/pages/contact.html'},
        ],
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
            // If Algolia did not provided you any `appId`, use `BH4D9OD16A` or remove this option
            appId: '<APP_ID>',
        },
        sidebar,
        logo: "/assets/TCMB_logo.svg.png"
    }
}