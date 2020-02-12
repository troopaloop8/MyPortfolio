import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function DOM2() {
    const data = useStaticQuery(graphql`
    query ImagesF {
      image: file(relativePath: { eq: "DOM-II.png" }) {
        id
        childImageSharp {
          fixed(width: 400 height: 400) {
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
            <p className="title has-text-black">DOM-II</p>
            <p className="subtitle has-text-black">Added several mouseover events via DOM and used some greensock animations</p>
            <Img 
                fluid={data.image.childImageSharp.fluid} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default DOM2;
