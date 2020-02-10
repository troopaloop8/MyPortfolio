import React from "react"
import { Link } from "gatsby"
import Menu from "../components/menu";
// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Menu />
    <SEO title="Home"
    />
    <h1>Let me introduce myself.</h1>
    <p>I'm currently a Lambda School student studying web full stack.</p>
    <p>guh</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
