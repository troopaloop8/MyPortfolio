import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from "../components/githubIcon";

function BuildWeek1() {
  const data = useStaticQuery(graphql`
    query ImagesJ {
      image: file(relativePath: { eq: "Build-Week-1.png" }) {
        id
        childImageSharp {
          fixed(width: 400, height: 400) {
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
              <p class="title has-text-black">Dad Jokes Project</p>
              <p class="subtitle has-text-black">
                Marketing Page for Dad Jokes App -- used Material UI for styling
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/Lambda-PT-Build-Sprint-Dad-Jokes-9/Marketing/tree/jonathan-troop">
                    Github
                  </a>
                  <div className="git-icon">
                    <a href='https://github.com/Lambda-PT-Build-Sprint-Dad-Jokes-9/Marketing/tree/jonathan-troop'><GithubIcon /></a>
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

export default BuildWeek1;
