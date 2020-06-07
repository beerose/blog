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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: false,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files", // gif, svg
            options: {
              ignoreFileExtensions: ["png", "jpg", "jpeg"],
              destinationDir: f => `${f.name}-${f.hash}`,
            },
          },
          {
            resolve: `gatsby-remark-images`, // png, jpg
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149605117-1",
      },
    },
  ],
};
