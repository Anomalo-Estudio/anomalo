import React from "react"
import { Link, graphql } from "gatsby"
// import styles from "../components/App.css"
import Layout from "../components/layout"
import Navbar from "../components/Navbar"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Works from "./Works"
import About from "./About"
import Contact from "./Contact"


const IndexPage = ({ data }) => (
  
  <Router>
    <Navbar />
    <Switch>

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
    <Route path='/' exact />
    <Route path='/' exact component={Works} />
    <Route path='/' exact component={About} />
    <Route path='/' exact component={Contact} />
    </Switch>
  </Router>
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
