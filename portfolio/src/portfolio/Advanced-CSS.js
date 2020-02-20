import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from "../components/githubIcon";

const AdvancedCSS = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "Sprint-Advanced-CSS.png" }) {
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
  console.log(data);
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
              <p class="title has-text-black ">Advanced CSS</p>
              <p class="subtitle has-text-black">
                Demo Project utilizing variables, mixins, and parametric mixins
                in LESS
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/troopaloop8/Sprint-Challenge--Advanced-CSS">
                    Github
                  </a>
                  <div className="git-icon">
                    <a href="https://github.com/troopaloop8/Sprint-Challenge--Advanced-CSS">
                      <GithubIcon />
                    </a>
                  </div>
                </span>
              </p>
            </footer>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AdvancedCSS;
