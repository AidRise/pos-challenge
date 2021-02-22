import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <header className="header-nav">
            <div className="nfhs-logo">
                <a href="#" >
                    <img src="https://www.nfhsnetwork.com/_nuxt/img/3c95376.svg" />
                </a>
            </div>
            <a href="#" className="watch-live-link">
                Watch Events
                <span>150 LIVE</span>
            </a>
            <a href="#" className="browse-link">Browse</a>
            <button className="nav-mobile"></button>
            <div className="search">
                <input type="text" placeholder="Find your school, event, association..." id="nav-search" />
                <div id="nav-search-icon">

                </div>
            </div>
        </header>
    );
}

export default Navbar;