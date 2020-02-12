import React from "react";
// import { Link } from "gatsby"
import Menu from "../components/menu";
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import AdvancedCSS from "../portfolio/Advanced-CSS";
import DOM1 from "../portfolio/DOM-I";
import DOM2 from "../portfolio/DOM-II";
import React1 from "../portfolio/React-I";
import React2 from "../portfolio/React-II";
import React3 from "../portfolio/React-III";
import ReactWars from "../portfolio/React-Wars";
import AppliedJS from "../portfolio/Sprint-Applied-JS";
import BuildWeek1 from "../portfolio/build-week-I";
import Components1 from "../portfolio/components-I";
import Components2 from "../portfolio/components-II";
import "../sass/mystyles.css";
import './main.css'

const AboutPage = () => (
  <div>
    <Menu />

    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Projects:</h1>
          <div className='tile is-ancestor'>
          <div class="tile is-parent">
            <AdvancedCSS />
            <BuildWeek1 />
            <DOM1 />
          </div>
          </div>
          <div className='tile is-ancestor'>
          <div class="tile is-parent">
            <DOM2 />
            <Components1 />
            <Components2 />
          </div>
          </div>
          <div className='tile is-ancestor'>
          <div class="tile is-parent">
            <AppliedJS />
            <React1 />
            <React2 />
          </div></div>
          <div className='tile is-ancestor'>
          <div class="tile is-parent">
            <React3 />
            <ReactWars />
          </div></div>
          <div class="tile is-parent"></div>
          <div class="tile is-parent"></div>
          <div class="tile is-parent"></div>
        </div>
      
      </div>
    </section>
  </div>
);

export default AboutPage;
