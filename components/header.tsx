
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link href="/">
          <h1 className="sitename">
            <span>My Landing Page</span>
          </h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link href="#hero" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#services">Technology</Link>
            </li>
            <li>
              <Link href="#features">Features</Link>
            </li>
            <li>
              <Link href="#faq">Questions</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
         
        </nav>
      </div>
    </header>
  );
};

export default Header;
