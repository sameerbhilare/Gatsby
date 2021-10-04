const React = require("react")
const Layout = require("./src/components/Layout").default // imp

/*
    The file gatsby-browser.js lets us respond to Gatsby-specific events within the browser, 
    and wrap our page components in additional global components. 
    Refer - https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
*/

// 'element' is every page in our project
exports.wrapPageElement = ({ element, props }) => {
  // wrap every page with Layout element
  return <Layout {...props}>{element}</Layout>
}
