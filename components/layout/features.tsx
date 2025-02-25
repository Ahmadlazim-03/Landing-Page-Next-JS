import React from 'react'
import Image from "next/legacy/image"

const Features = () => {
  return (
    <section id="features" className="features section light-background">

      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <div><span>Check Our</span> <span className="description-title">Features</span></div>
      </div>

      <div className="container">

        <div className="row gy-5 justify-content-between">

          <div className="col-xl-5" data-aos="zoom-out" data-aos-delay="100">

<Image src="/features.svg" alt="Features Image" width={500} height={300} />

          </div>

          <div className="col-xl-6 d-flex">
            <div className="row align-self-center gy-4">

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Home</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>About</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="400">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Technology</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Features</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="600">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Questions</h3>
                </div>
              </div>

              <div className="col-md-6" data-aos="fade-up" data-aos-delay="700">
                <div className="feature-box d-flex align-items-center">
                  <i className="bi bi-check"></i>
                  <h3>Contact</h3>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Features