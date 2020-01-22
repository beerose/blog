module.exports = {
  siteMetadata: {
    title: "aleksandra.codes",
    siteUrl: "https://aleksandra.codes",
    twitterHandle: "@aleksandrasays",
    url: "https://aleksandra.codes",
    description:
      "Aleksandra Sikora's personal blog on computer science and programming.",
    topics: [],
    menu: [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "About me",
        path: "/about",
      },
      {
        name: "Speaking",
        path: "/speaking",
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
        github: `https://github.com/beerose`,
        twitch: ``,
      },
    },
  },
  plugins: [
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [{ resolve: "gatsby-remark-embed-gist" }],
      },
    },
    {
      resolve: "gatsby-remark-embed-gist",
      options: {
        username: "beerose",
        includeDefaultCss: true,
      },
    },
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
