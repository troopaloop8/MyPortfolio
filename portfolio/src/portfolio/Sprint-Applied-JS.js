import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function AppliedJS() {
    const data = useStaticQuery(graphql`
    query imagesA {
      image: file(relativePath: { eq: "Sprint-Applied-js.png" }) {
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
            <p className="title has-text-black">Applied JS Challenge</p>
            <p className="subtitle has-text-black">Made a newsfeed with components generated with dummy data. All content added via DOM. Made a carousel via components.</p>
            <Img 
                fluid={data.image.childImageSharp.fluid} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default AppliedJS;
