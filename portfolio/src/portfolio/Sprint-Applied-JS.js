import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from '../components/githubIcon';

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
        <article className="tile is-child box ">
          <div class="card">
            <div class="card-image">
              <Img
                fluid={data.image.childImageSharp.fluid}
                alt="Advanced-CSS-Thumbnail"
              />
            </div>
            <div class="card-content">
              <p class="title has-text-black">Applied JS Challenge</p>
              <p class="subtitle has-text-black">
              Made a newsfeed with components generated with dummy data. All content added via DOM. Made a carousel via components.
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/troopaloop8/Sprint-Challenge-Applied-Javascript">
                    Github 
                  </a>
                  <div className="git-icon">
                    <a href='https://github.com/troopaloop8/Sprint-Challenge-Applied-Javascript'><GithubIcon /></a>
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

export default AppliedJS;
