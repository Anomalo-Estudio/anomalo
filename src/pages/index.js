import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
 
const IndexPage = ({ data }) => (
  <Layout>
    <h1>Welcome to Anómalo site.</h1>
    <p>We are a</p>
    <p>multidisciplinary</p>
    <p>design studio</p>
    <p>Somos un estudio</p>
    <p>de diseño.</p>
    <p>multidisciplinario</p>
    <ul>
      {data.allStrapiArticulo.edges.map(({ node }) => (
    <li key={node.strapiId}>
      <h2>
        <Link to={`/${node.strapiId}`}>{node.titulo}</Link>
      </h2>
      <p>{node.descripcion}</p>
    </li>
))}
  </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)
 
export default IndexPage
 
export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticulo {
      edges {
        node {
          strapiId
          titulo
          descripcion
        }
      }
    }
  }
`
