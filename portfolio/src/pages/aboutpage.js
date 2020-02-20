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
import ReactRouterMini from "../portfolio/React-Router-Mini";
import "../sass/mystyles.css";

const AboutPage = () => (
  <div>
    <Menu />

    <section className="hero is-dark is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Projects:</h1>
          <div className="columns">
            <div className="column">
              <AdvancedCSS />
              <DOM1 />
              <Components1 />
              <AppliedJS />
              <React2 />
              <ReactWars />
            </div>
            <div className="column">
              <BuildWeek1 />
              <DOM2 />
              <Components2 />
              <React1 />
              <React3 />
              <ReactRouterMini />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
