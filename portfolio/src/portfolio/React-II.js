import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from '../components/githubIcon';

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
        <article className="tile is-child box ">
          <div class="card">
            <div class="card-image">
              <Img
                fluid={data.image.childImageSharp.fluid}
                alt="Advanced-CSS-Thumbnail"
              />
            </div>
            <div class="card-content">
              <p class="title has-text-black">React-II</p>
              <p class="subtitle has-text-black">
              Made an instagram clone that used dummy data. Heavy usage of props.
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/troopaloop8/React-Components-Insta-Clone">
                    Github 
                  </a>
                  <div className="git-icon">
                    <a href='https://github.com/troopaloop8/React-Components-Insta-Clone'><GithubIcon /></a>
                  </div>
                </span>
              </p>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
}

export default React2;
