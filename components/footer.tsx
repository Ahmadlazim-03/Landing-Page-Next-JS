import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer light-background">
      <div className="container">

        <div className="social-links d-flex justify-content-center">
          <Link href="/" target="_blank" aria-label="Twitter">
            <i className="bi bi-twitter-x"></i>
          </Link>
          <Link href="/" target="_blank" aria-label="Facebook">
            <i className="bi bi-facebook"></i>
          </Link>
          <Link href="https://www.instagram.com/ahmdlzm_/" target="_blank" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </Link>
          <Link href="https://www.linkedin.com/in/ahmad-lazim-5b8302288/" target="_blank" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>

        <div className="credits">
        Designed by
          <Link href="https://bootstrapmade.com/" target="_blank">
            {" Ahmad Lazim "}
          </Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
