import React from "react";
// import { Link } from "gatsby"
import Menu from "../components/menu";
// import Layout from "../components/layout"
import Image from "../components/image";
import SEO from "../components/seo";
import "../sass/mystyles.css";

const IndexPage = () => (
  <div>
    <Menu />
    <SEO title="Home" />
    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container ">
          <div className="tile is-anscestor center ">
            <div className="tile is-9 is-parent is-bold notification top-tile-center">
              <div className="tile is-child box fix-height">
                <div className="image-box">
                  <div className="center-img">
                    <Image className="image-centered" />
                  </div>
                </div>
              </div>
              <div className="tile is-child box  fix-height">
                <div className="center">
                  <h2 className="name-title has-text-black underline">Jonathan Troop</h2>
                </div>
                <div className="profile-container">
                  
                    <p className="profile-card">
                      Web Full-Stack Programmer.
                    </p>
                    <p className="profile-card">
                      Living in Fukuoka, Japan.
                    </p>
                    <p className="profile-card">
                      Loves my Wife and Two Sons.
                    </p>
                    <p className="profile-card">
                      Tech and Futurism Enthusiast.
                    </p>
                    <p className="profile-card">
                      Likes Gaming, D&D, 3-D Printing
                    </p>
                    
                  
                </div>
              </div>
            </div>
          </div>
          <div className="tile is anscestor center">
            <div className="tile is-parent is-9 is-bold notification ">
              <div className="tile is-child notification has-text-black box">
                <h1 className=" resume-title">Résumé</h1>
                <h2 className="resume-category">Programming Proficiencies</h2>
                <ul className="resume">
                  <li>HTML</li>
                  <li>CSS/LESS/SASS</li>
                  <li>Bootstrap/Bulma</li>
                  <li>JavaScript, React, GatsbyJS</li>
                  <li>And growing...</li>
                </ul>
                <h2 className="resume-category">Education</h2>
                <ul className="resume">
                  <li>
                    <strong>2003-2007:</strong> B.A. In Communications, East
                    Asian Studies, and Japanese from University of Delaware
                  </li>
                  <li>
                    <strong>2010-2012:</strong> M.A. Teaching English to
                    Speakers of Other Languages from University of Delaware
                  </li>
                  <li>
                    <strong>2019-Present:</strong> Web Full-Stack at Lambda
                    School
                  </li>
                </ul>

                <h2 className="resume-category">Work Experience</h2>
                <ul className="resume">
                  <li>
                    <strong>2007-2009:</strong> Taught English as a Foreign
                    Language in Japan for the J.E.T. Program
                  </li>
                  <li>
                    <strong>2010-2012:</strong> Research Assistant in University
                    of Delaware School of Education
                  </li>
                  <li>
                    <strong>2012-2018:</strong> Taught High School ESL, English,
                    and History in Fairfax, VA and New Castle, DE
                  </li>
                </ul>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default IndexPage;

