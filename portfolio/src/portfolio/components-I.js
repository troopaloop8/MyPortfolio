import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Components1() {
  
    const data = useStaticQuery(graphql`
    query ImagesI {
      image: file(relativePath: { eq: "Components-I.png" }) {
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
            <p className="title has-text-black">Components 1</p>
            <p className="subtitle has-text-black">Created newsfeed via dummy data in vanilla JS</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
        </div>
    </div>
  );
}

export default Components1;
