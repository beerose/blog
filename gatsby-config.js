module.exports = {
  siteMetadata: {
    title: `aleksandra.codes`,
    siteUrl: `https://aleksandra.codes`,
    twitterHandle: "@aleksandrasays",
    url: "https://aleksandra.codes",
    description: ``,
    topics: [],
    menu: [
      {
        name: "Home",
        path: "/",
      },
    ],
    footerMenu: [
      {
        name: "RSS",
        path: "/rss.xml",
      },
      {
        name: "Sitemap",
        path: "/sitemap.xml",
      },
    ],
    search: true,
    author: {
      name: `Aleksandra`,
      description: `Hi! I'm Aleksandra, a software developer based in Wrocław.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/aleksandrasays`,
        linkedin: `https://www.linkedin.com/in/aleksandra-sikora-b54699132/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/blackdahila`,
        twitch: ``,
      },
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149605117-1",
      },
    },
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        contentPath: "./content",
        manifest: {
          name: `Aleksandra Sikora's personal blog`,
          short_name: `aleksandra.codes`,
          start_url: `/`,
          background_color: `#fefefe`,
          theme_color: `#fefefe`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`,
        },
      },
    },
  ],
};
