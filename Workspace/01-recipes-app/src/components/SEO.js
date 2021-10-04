import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// querying 'siteMetadata' configured in gatsby-config.js
const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)

  // if 'description' is passed, use that, otherwise use site description (from gatsby-config.js)
  const metaDescription = description || site.siteMetadata.description
  return (
    // Whatever we set up on that Helmet component, it will be added to our <head> element.
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}
    ></Helmet>
  )
}

export default SEO
