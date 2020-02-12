import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Components2() {
    const data = useStaticQuery(graphql`
    query ImagesH {
      image: file(relativePath: { eq: "Components-II.png" }) {
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
            <p className="title has-text-black">Components 2</p>
            <p className="subtitle has-text-black">Used github API and components to display people I follow on github in vanilla JS using axios for API</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default Components2;
