import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function ReactWars() {
    const data = useStaticQuery(graphql`
    query ImagesB {
      image: file(relativePath: { eq: "React-Wars.png" }) {
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
            <p className="title has-text-black">React Wars</p>
            <p className="subtitle has-text-black">Using SWAPI, made site that displays characters in database on cards. Used react and axios to build it and reactstrap for styling</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default ReactWars;
