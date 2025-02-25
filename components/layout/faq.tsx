import React from 'react'

const Faq = () => {
  return (
    <section id="faq" className="faq section light-background">

    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div className="content px-xl-5">
            <h3><span>Frequently Asked </span><strong>Questions</strong></h3>
            <p>
            Questions about landing page creation
            </p>
          </div>
        </div>

        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">

          <div className="faq-container">
            <div className="faq-item faq-active">
              <h3><span className="num">1.</span> <span>How to install next js ?</span></h3>
              <div className="faq-content">
                <p>You can install Next.js easily using npm, npx create-next-app@latest my-next-app
                </p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item faq-active">
              <h3><span className="num">5.</span> <span>What is TypeScript ?</span></h3>
              <div className="faq-content">
                <p>TypeScript is a programming language and a superset of JavaScript developed by Microsoft. It adds static typing and other powerful features to JavaScript, making it more scalable and maintainable.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>


            <div className="faq-item faq-active">
              <h3><span className="num">2.</span> <span>How to install bootstrap ?</span></h3>
              <div className="faq-content">
                <p>Type npm install bootstrap in the terminal</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item faq-active">
              <h3><span className="num">3.</span> <span>Why is it recommended to use next js ?</span></h3>
              <div className="faq-content">
                <p>Next.js is recommended because it enhances React applications with powerful features that improve performance, SEO, and developer experience.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

            <div className="faq-item faq-active">
              <h3><span className="num">4.</span> <span>Why should you host your website using Vercel ?</span></h3>
              <div className="faq-content">
                <p>Vercel is one of the best platforms for hosting modern web applications, especially those built with Next.js, React, Vue, and other frameworks.</p>
              </div>
              <i className="faq-toggle bi bi-chevron-right"></i>
            </div>

          </div>

        </div>
      </div>

    </div>

  </section>
  )
}

export default Faq