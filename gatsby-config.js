require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  // spaceId: process.env.CONTENTFUL_SPACE_ID,
  spaceId: `i63sz3uko1kl`,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    title: `Waymore Creative Collective`,
    description: `Creative Collective working since 2019`,
    author: `@waymorecc`,
    siteUrl: "http://localhost:8000",
  },
  // pathPrefix: "/gatsby-contentful-starter",
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Waymore Creative Collective",
        short_name: "Waymore CC",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#fff",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/components/assets/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/components/assets/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Layout/Layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        // optional: To create a default crumb
        // see Click Tracking default crumb example below
        // useAutoGen: required 'true' to use autogen
        useAutoGen: true,
        autoGenHomeLabel: `home`,
        useClassNames: true,
        crumbWrapperStyle: { display: "flex" },
      },
    },
  ],
}
