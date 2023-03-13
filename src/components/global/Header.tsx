import "./Header.scss";
import DegenBotLogo from "../../assets/images/DegenBotLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [mobileNavigationState, setMobileNavigationState] = useState<"shown" | "collapsed">(
    "collapsed"
  );

  const headerElementRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    function handleStickyNavigationBar() {
      const sticky = headerElementRef.current.offsetTop;

      if (window.scrollY > sticky) {
        headerElementRef.current.classList.add("sticky");
      } else {
        headerElementRef.current.classList.remove("sticky");
      }
    }

    document.addEventListener("scroll", handleStickyNavigationBar);

    return () => {
      document.removeEventListener("scroll", handleStickyNavigationBar);
    };
  }, []);

  function toggleMobileNavigation() {
    if (mobileNavigationState === "shown") {
      setMobileNavigationState("collapsed");
    } else {
      setMobileNavigationState("shown");
    }
  }

  return (
    <header className="site-header" ref={headerElementRef}>
      <img className="brand-logo" src={DegenBotLogo} alt="DegenBot Logo" />

      <nav className="site-nav">
        <NavigationList />

        <button className="mobile-toggle-button" onClick={toggleMobileNavigation}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </button>
      </nav>

      {/*{mobileNavigationState === "shown" && (*/}
      {/*  <motion.nav className="mobile-nav">*/}
      {/*    <NavigationList />*/}
      {/*  </motion.nav>*/}
      {/*)}*/}

      <motion.nav
        className="mobile-nav"
        style={{ overflow: "hidden" }}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: mobileNavigationState === "shown" ? "auto" : 0 }}
        exit={{ opacity: 0, height: 0 }}
      >
        <NavigationList />
      </motion.nav>
    </header>
  );
}

export default Header;

function NavigationList() {
  return (
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#features">Features</a>
      </li>
      <li>
        <a href="#security">Security</a>
      </li>
      <li>
        <a href="#tokenomics">Tokenomics</a>
      </li>
      <li>
        <a href="#roadmap">Roadmap</a>
      </li>
      <li>
        <a href="#whitepaper">Whitepaper</a>
      </li>
      <li>
        <a href="#app">App</a>
      </li>

      <li>
        <Link to={"/dapp"} className="dapp-button">
          <span>Launch Dapp</span>
        </Link>
      </li>
    </ul>
  );
}
