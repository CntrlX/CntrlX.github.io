import { useState } from "react";
import classes from "./Header.module.css";

import { FiMenu } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { HashLink as Link } from "react-router-hash-link";
import Dropdown from "./Dropdown";
import { HashLink } from "react-router-hash-link";
import Logo from "./header_logo.png";

const Scroll = require("react-scroll");

const Header = () => {
  const Drop = Scroll.Link;
  const [scrolled, isScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [drop, setDrop] = useState(false);

  window.onscroll = () => {
    isScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <header
      className={`${!scrolled ? classes.header : classes.scrolledHeader}`}
    >
      <div className={classes.elements}>
        <div className={classes.logobox}>
          <Drop
            activeClass={classes.active}
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={600}
          >
            <Link to="/">
              <img src={Logo} alt="/" className={classes.logo} />
            </Link>
          </Drop>
        </div>

        <div className={classes.navbox}>
          <ul className={classes.nav}>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="/#home">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#about">
                  About
                </HashLink>
              </Drop>
            </li>
            <li
              className={`${classes.dropLink}`}
              onClick={() => setDrop(!drop)}
            >
              {drop ? <Dropdown click={() => setDrop(!drop)} /> : ""}Events
              <FontAwesomeIcon
                size="sm"
                style={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "white",
                }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#ambassador">
                  Register
                </HashLink>
              </Drop>
            </li>
            <li className={classes.navLink}>
              <Drop
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#contact">
                  Contact
                </HashLink>
              </Drop>
            </li>
          </ul>

          <Link target="_blank" rel="noopener noreferrer" to="/tickets">
            <button className={classes.btn}>Buy Tickets</button>
            {/* <button style={classes.mainButton} href="https://twitter.com/kamildyrek">
              <div class="left"></div>
              Hover me!
              <div class="right"></div>
            </button> */}
          </Link>


          <div className={classes.hamburger} onClick={() => setMobile(!mobile)}>
            {mobile ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "white" }}
                size="3x"
              />
            ) : (
              <FiMenu size={20} />
            )}
          </div>
        </div>

        <div className={`${!mobile ? classes.none : classes.mobileBox}`}>
          <Link target="_blank" rel="noopener noreferrer" to="/tickets">
            <button className={classes.btn1}>Buy Tickets</button>
          </Link>

          {/* Mobile Page */}

          <ul className={classes.mobileNav}>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="home"
                spy="true"
                smooth={true}
                offset={-120}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#home">
                  Home
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="about"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#about">
                  About
                </HashLink>
              </Drop>
            </li>
            <li className={`${classes.mobLink}`} onClick={() => setDrop(!drop)}>
              {drop ? <Dropdown click={() => { setDrop(!drop); setMobile(!mobile) }} /> : ""}Events
              <FontAwesomeIcon
                size="sm"
                style={{
                  display: "inline-block",
                  marginLeft: ".3rem",
                  color: "white",
                }}
                icon={faArrowDown}
                fade
              />
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="ambassador"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#ambassador">
                  Register
                </HashLink>
              </Drop>
            </li>
            <li>
              <Drop
                onClick={() => setMobile(!mobile)}
                activeClass={classes.active}
                to="contact"
                spy="true"
                smooth={true}
                offset={-100}
                duration={600}
                style={{ color: "white", textDecoration: "none" }}
              >
                <HashLink className={classes.homeLink} to="#contact">
                  Contact
                </HashLink>
              </Drop>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
