require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Rafael Mateus`,
    siteTitleAlt: `Rafael Mateus - Software Developer`,
    siteHeadline: `Rafael Mateus - Software Developer`,
    siteUrl: `https://rafaelbmateus.com.br`,
    siteDescription: `I'm Software Developer constantly learning and sharing knowledge with the community`,
    siteLanguage: `en`,
    pathPrefix: "/rafaelbmateus-site"
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        mdx: true
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rafael Mateus - Software Developer`,
        short_name: `rafaelbmateus`,
        description: `I'm Software Developer constantly learning and sharing knowledge with the community`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
