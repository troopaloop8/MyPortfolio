import React from "react";
import "../sass/mystyles.css";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import GithubIcon from '../components/githubIcon';

function React1() {
    const data = useStaticQuery(graphql`
    query ImagesE {
      image: file(relativePath: { eq: "React-I.png" }) {
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
              <p class="title has-text-black">React-I</p>
              <p class="subtitle has-text-black">
              Made a scoreboard app with react using useState hook, and useEffect for the timer.
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <span>
                  View Repo on{" "}
                  <a href="https://github.com/troopaloop8/react-american-football-scoreboard">
                    Github 
                  </a>
                  <div className="git-icon">
                    <a href='https://github.com/troopaloop8/react-american-football-scoreboard'><GithubIcon /></a>
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

export default React1;
