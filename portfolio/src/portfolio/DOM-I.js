import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from '../components/githubIcon';

function DOM1() {
    const data = useStaticQuery(graphql`
    query ImagesG {
      image: file(relativePath: { eq: "DOM-I.png" }) {
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
            <div class="card-content ">
              <p class="title has-text-black">DOM-I</p>
              <p class="subtitle has-text-black">
              Populated content and added style in website via DOM manipulation
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/troopaloop8/DOM-I">
                    Github 
                  </a>
                  <div className="git-icon">
                    <a href='https://github.com/troopaloop8/DOM-I'><GithubIcon /></a>
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

export default DOM1;
