const React = require("react")
const Layout = require("./src/components/Layout").default // imp

/*
    Note: The APIs wrapPageElement and wrapRootElement exist in both the browser and Server-Side Rendering (SSR) APIs. 
    You generally should implement the same components in both gatsby-ssr.js and gatsby-browser.js 
    so that pages generated through SSR are the same after being hydrated in the browser.
    Refer - https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
*/

// 'element' is every page in our project
exports.wrapPageElement = ({ element, props }) => {
  // wrap every page with Layout element
  return <Layout {...props}>{element}</Layout>
}
