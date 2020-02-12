import React from "react"
// import { Link } from "gatsby"
import Menu from "../components/menu";
// import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo";
import '../sass/mystyles.css';
import './main.css';

const IndexPage = () => (
  <div >
    <Menu />
    <SEO title="Home"
    />
    <section className='hero is-dark is-fullheight-with-navbar is-bold'>
    <div className='hero-body'>
      <div className='container'>
      <div className="tile is-ancestor">
  <div className="tile is-4 is-vertical is-parent is-flex">
    <div className="tile is-child notification ">
    <Image className='pic-profile' />
    </div>
    <div className="tile is-child notification has-text-black">
    <h1 className='title has-text-black' >Jonathan Troop</h1>
    <p className='profile-card'>Tech and futurism enthusiast.</p>
    <p className='profile-card'>Husband, father of two boys.</p>
    <p className='profile-card'>Often fat fingers posts.</p>
    <p className='profile-card'>Based in Fukuoka, Japan</p>
      {/* <h2 className='subtitle'>Web Full Stack Student @ Lambda School</h2> */}
    </div>
  </div>
  <div className="tile is-parent">
    <div className="tile is-child notification has-text-black">
      <h1 className=" resume-title">Résumé</h1>
      <h2 className='resume-category'>Education</h2>
      <ul className='resume'>
        <li>2003-2007: B.A. In Communications, East Asian Studies, and Japanese from University of Delaware</li>
        <li>2010-2012: M.A. Teaching English to Speakers of Other Languages from University of Delaware</li>
        <li>2019-Present: Web Full-Stack at Lambda School</li>
      </ul>
      
      <h2 className='resume-category'>Work Experience</h2>
      <ul className='resume'>
        <li>2007-2009: Taught English as a Foreign Language in Japan for the J.E.T. Program</li>
        <li>2010-2012: Research Assistant in University of Delaware School of Education</li>
        <li>2012-2018: Taught High School ESL, English, and History in Fairfax, VA and New Castle, DE</li>
      </ul>
      
      <h2 className='resume-category'>Programming Proficiencies</h2>
      <ul className='resume'>
        <li>HTML</li>
        <li>CSS/LESS/SASS</li>
        <li>Bootstrap/Bulma</li>
        <li>JavaScript, React, GatsbyJS</li>
        <li>And growing...</li>
      </ul>
    </div>
  </div>
</div>
      
      </div>
    </div>
    </section>
    
  </div>
)

export default IndexPage


// // <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
// <Image />
// </div>
// <Link to="/page-2/">Go to page 2</Link>