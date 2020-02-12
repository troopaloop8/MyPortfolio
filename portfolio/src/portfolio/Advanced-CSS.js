import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const AdvancedCSS = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "Sprint-Advanced-CSS.png" }) {
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
  console.log(data);
  return (
    <div>
      <div class="tile is-parent">
          <article className="tile is-child box ">
           
            <p className="title has-text-black">Advanced CSS</p>
            <p className="subtitle has-text-black">
              Demo Project utilizing variables, mixins, and parametric mixins in
              LESS
            </p>
            
              <Img 
                fixed={data.image.childImageSharp.fixed} alt='Advanced-CSS-Thumbnail'
                />
            
          </article>
          </div>
    </div>
  );
};

export default AdvancedCSS;
