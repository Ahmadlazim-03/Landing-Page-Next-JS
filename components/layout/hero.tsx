'use client'
import React, { useEffect } from "react";
import Image from "next/legacy/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  return (
    <section id="hero" className="hero section light-background">
      <div className="container position-relative" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>Tugas Modul Minggu 5</h2>   
              <b>Assignment :</b>
              <p>Creating a Landing Page with CSS Framework</p>
              <b>Objective :</b>
              <p>The objective of this assignment is to create a landing page using a CSS framework (such as Bootstrap) and document the installation process, screenshots of the resulting page, and any challenges encountered during the process.</p>
              <b>Created by :</b>
              <p>Ahmad Lazim ( 434231033 )</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://youtu.be/ZwMVRjPEi0M?si=bsgWRysQ1vlmcgBc" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
          <Image src="/hero.png" alt="Hero Image" width={500} height={300} priority />

          </div>
        </div>
      </div>

      <div className="icon-boxes position-relative" data-aos="fade-up" data-aos-delay="200">
        <div className="container position-relative">
          <div className="row gy-4 mt-5">
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-easel"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Next JS Framework</a></h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-gem"></i></div>
                <h4 className="title"><a href="" className="stretched-link">TypeScript</a></h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-geo-alt"></i></div>
                <h4 className="title"><a href="" className="stretched-link">CSS Bootstrap</a></h4>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="icon-box">
                <div className="icon"><i className="bi bi-command"></i></div>
                <h4 className="title"><a href="" className="stretched-link">Vercel Hosting</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
