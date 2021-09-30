import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from "../components/SEO"

const About = props => {
  //console.log({props})

  const {
    data: {
      allContentfulRecipe: { nodes: recipes },
    },
  } = props

  return (
    <Layout>
      <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring book poke taxidermy</h2>
            <p>
              Taxidermy forage glossier letterpress heirloom before they sold
              out you probably haven't heard of them banh mi biodiesel chia.
            </p>
            <p>
              Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia
              retro.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

/*
  Gatsby behind the scenes will execute below query and the result of it will be available to
  our component above on 'props.data'.
  We just need to export a graphql query. The name of the exported query can be anything. e.g. here its 'query'

  This is a 'Page Query'. 
  Page Queries can only be used inside a Page component, it can NOT be used in any other components.
  This is because in the page queries, we can pass variables.

  There is also another type of query called 'Static Query'.
  Static Query can be used in normal components (e.g. AllRecipes.js) as well as Page components.
  Typically Static Query is used with useStaticQuery() React hoook.
*/
export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default About
