/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`, // used by gatsby-plugin-react-helmet
    url: `https://sameerbhilare-portfolio-gatby-strapi.netlify.app`, // no '/' at the end ***
    twitterUsername: `@sameer59`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // strapi needs to run locally in order for this app to work
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`job`, `project`], // as configured in strapi admin
        //If using single types place them in this array.
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
