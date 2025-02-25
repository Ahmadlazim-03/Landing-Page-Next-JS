'use client'
import React, { useEffect } from "react";
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000, 
        once: true,
      });
    }, []);
  return (
    <section id="about" className="about section">

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
            <p className="who-we-are">About Content</p>
            <h3>Application to learn to create landing pages using bootstrap</h3>
            <p className="fst-italic">
              Step by step :
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i> <span>Installation Process of CSS Framework </span></li>
              <li><i className="bi bi-check-circle"></i> <span>Screenshots of the Landing Page</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Challenges Encountered</span></li>
              <li><i className="bi bi-check-circle"></i> <span>Project Link</span></li>
            </ul>
            <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
          </div>

          <div className="col-lg-6 about-images" data-aos="fade-up" data-aos-delay="200">
            <div className="row gy-4">
              <div className="col-lg-6">
                <Image src="/about-company-1.jpg" className="img-fluid"  width={500}
                  height={500}
                  alt="Hero Image"
                  style={{ display: "block", visibility: "visible", opacity: 1 }}
                  data-aos="fade-up" 
                  data-aos-delay="200"  />
              </div>
              <div className="col-lg-6">
              <div className="row gy-4">
              <div className="col-lg-12">
                <Image src="/about-company-2.jpg" width={500}
                  height={500}
                  alt="Hero Image"
                  className="img-fluid"
                  style={{ display: "block", visibility: "visible", opacity: 1 }}
                  data-aos="fade-up" 
                  data-aos-delay="200"  />
              </div>
              <div className="col-lg-12">
                <Image src="/about-company-3.jpg"  width={500}
                  height={500}
                  alt="Hero Image"
                  className="img-fluid"
                  style={{ display: "block", visibility: "visible", opacity: 1 }}
                  data-aos="fade-up" 
                  data-aos-delay="200"  />
              </div>
              </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About