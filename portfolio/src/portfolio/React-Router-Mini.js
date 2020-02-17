import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from "../components/githubIcon";
import "../pages/main.css";

function ReactRouterMini() {
  const data = useStaticQuery(graphql`
    query ImagesK {
      image: file(relativePath: { eq: "React-Router-Mini.png" }) {
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
              <p class="title has-text-black ">React Router Mini</p>
              <p class="subtitle has-text-black">A simple page to demonstrate navigating between components/pages in React Router</p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on <a href="https://github.com/troopaloop8/React-Router-Basic-Nav">Github</a>
                  <div className="git-icon">
                    <a href='https://github.com/troopaloop8/React-Router-Basic-Nav'><GithubIcon /></a>
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

export default ReactRouterMini;