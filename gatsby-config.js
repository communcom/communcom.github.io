module.exports = {
  siteMetadata: {
    title: "Commun",
    description:
      "Social network of the people, by the people, and for the people.",
    author: "@communcom",
    siteUrl: "https://commun.com",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-linaria",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /-icon.svg/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Montserrat",
            variants: ["700"],
          },
          {
            family: "Open Sans",
            variants: ["400", "600", "700", "800"],
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-analytics',
    //   options: {
    //     trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Commun",
        short_name: "Commun",
        start_url: "/",
        background_color: "#6a80f5",
        theme_color: "#6a80f5",
        display: "standalone",
        icon: "src/images/icon.png",
      },
    },
  ],
}
