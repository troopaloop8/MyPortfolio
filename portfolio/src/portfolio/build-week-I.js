import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function BuildWeek1() {
  const data = useStaticQuery(graphql`
    query ImagesJ {
      image: file(relativePath: { eq: "Build-Week-1.png" }) {
        id
        childImageSharp {
          fixed(width: 400, height: 400) {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <div class="tile is-parent">
        <article className="tile is-child box">
          <p className="title has-text-black">Build Week 1</p>
          <p className="subtitle has-text-black">
            Marketing Page for Dad Jokes App -- used Material UI for styling
          </p>

          <Img fluid={data.image.childImageSharp.fluid} alt="" />
        </article>
      </div>
    </div>
  );
}

export default BuildWeek1;
