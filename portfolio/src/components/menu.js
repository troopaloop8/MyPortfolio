import React from 'react'
import { Link } from "gatsby"
import './menu.css';


const Menu = () =>  {
    return(
        <div className="menu-container">
            <ul className="menu-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutpage">About</Link></li>
                <li><Link to="/">Skills</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>
    )
};


export default Menu;
