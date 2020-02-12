import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function React3() {
    const data = useStaticQuery(graphql`
    query ImagesC {
      image: file(relativePath: { eq: "React-III.png" }) {
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
            <p className="title has-text-black">React-III</p>
            <p className="subtitle has-text-black">Using NASA APOD API, made a photo of the day site that displays pic and info also with a date selector. Styled with styled components.</p>
            <Img 
                fixed={data.image.childImageSharp.fixed} alt=''
                />
          </article>
          </div>
    </div>
  );
}

export default React3;
