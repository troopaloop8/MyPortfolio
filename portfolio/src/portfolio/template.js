import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function template() {
  
  const data = useStaticQuery(graphql`
    query ImagesSOMETHING {
      image: file(relativePath: { eq: "Build-Week-1.png" }) {
        id
        childImageSharp {
          fixed(width: 400) {
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
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <p className="title has-text-black">Repo Title</p>
            <p className="subtitle has-text-black">Description</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
        </div>
      </div>
    </div>
  );
}

export default template;
