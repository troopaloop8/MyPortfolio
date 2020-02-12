import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function DOM1() {
    const data = useStaticQuery(graphql`
    query ImagesG {
      image: file(relativePath: { eq: "DOM-I.png" }) {
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
            <p className="title has-text-black">DOM-I</p>
            <p className="subtitle has-text-black">Populated content and added style in website via DOM manipulation</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default DOM1;
