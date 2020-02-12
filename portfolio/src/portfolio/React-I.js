import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function React1() {
    const data = useStaticQuery(graphql`
    query ImagesE {
      image: file(relativePath: { eq: "React-I.png" }) {
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
            <p className="title has-text-black">React-I</p>
            <p className="subtitle has-text-black">Made a scoreboard app with react using useState hook</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default React1;
