import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function React2() {
    const data = useStaticQuery(graphql`
    query ImagesD {
      image: file(relativePath: { eq: "React-II.png" }) {
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
            <p className="title has-text-black">React-II</p>
            <p className="subtitle has-text-black">Made an instagram clone that used dummy data. Heavy usage of props.</p>
            <Img 
                fluid={data.image.childImageSharp.fluid} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default React2;
