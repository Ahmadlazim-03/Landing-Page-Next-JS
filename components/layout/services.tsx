import React from 'react'

const Services = () => {
  return (
    <section id="services" className="services section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Technology</h2>
        <div><span className="description-title">Technology</span><span> used :</span></div>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="bi bi-activity"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Next JS Framework</h3>
              </a>
              <p>React framework used to build modern web applications with features like server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR).</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-broadcast"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>TypeScript Language</h3>
              </a>
              <p>Programming language and a superset of JavaScript. It adds static typing, making it easier to catch errors and build scalable applications.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-easel"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Bootstrap Framework</h3>
              </a>
              <p>Popular front-end framework for building responsive and mobile-first websites.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 align-items-center" data-aos="fade-up" data-aos-delay="300">
            <div className="service-item position-relative">
              <div className="icon">
                <i className="bi bi-chat-square-text"></i>
              </div>
              <a href="service-details.html" className="stretched-link">
                <h3>Vercel Hosting</h3>
              </a>
              <p>Cloud platform for hosting and deploying web applications, especially those built with Next.js, React, Vue, and other modern frameworks.</p>
            </div>
          </div>

         

        </div>

      </div>

    </section>
  )
}

export default Services