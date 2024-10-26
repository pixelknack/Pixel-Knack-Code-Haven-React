import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>Pixel Knack Code Haven</title>
        <meta
          name="description"
          content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
        />
        <meta property="og:title" content="Pixel Knack Code Haven" />
        <meta
          property="og:description"
          content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/66f0ce7c-0387-4e4e-bf51-9849219514e5/e17e7c8f-6850-44bb-bc07-c74ba842b248?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <img alt="image" src="/avatar-1500w.png" className="home-image1" />
          <div className="home-links-container1">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
                fill="currentColor"
              ></path>
            </svg>
            <Link to="/about" className="home-link1 Navbar-Link">
              About
            </Link>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12.876.64V.639l8.25 4.763c.541.313.875.89.875 1.515v9.525a1.75 1.75 0 0 1-.875 1.516l-8.25 4.762a1.75 1.75 0 0 1-1.75 0l-8.25-4.763a1.75 1.75 0 0 1-.875-1.515V6.917c0-.625.334-1.202.875-1.515L11.126.64a1.75 1.75 0 0 1 1.75 0m-1 1.298L4.251 6.34l7.75 4.474l7.75-4.474l-7.625-4.402a.25.25 0 0 0-.25 0m.875 19.123l7.625-4.402a.25.25 0 0 0 .125-.216V7.639l-7.75 4.474ZM3.501 7.64v8.803c0 .09.048.172.125.216l7.625 4.402v-8.947Z"
                fill="currentColor"
              ></path>
            </svg>
            <a href="#packages" className="home-link2 Navbar-Link">
              Packages
            </a>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M11 23.59v-3.6c-5.01-.26-9-4.42-9-9.49C2 5.26 6.26 1 11.5 1S21 5.26 21 10.5c0 4.95-3.44 9.93-8.57 12.4zM11.5 3C7.36 3 4 6.36 4 10.5S7.36 18 11.5 18H13v2.3c3.64-2.3 6-6.08 6-9.8C19 6.36 15.64 3 11.5 3m-1 11.5h2v2h-2zm2-1.5h-2c0-3.25 3-3 3-5c0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5"
                fill="currentColor"
              ></path>
            </svg>
            <a href="#faq" className="home-link3 Navbar-Link">
              FAQ
            </a>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-container11">
              <div data-role="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon18">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container2">
              <span className="home-link4 Navbar-Link">About</span>
              <span className="home-link5 Navbar-Link">Portofolio</span>
              <span className="Navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-section-separator2"></div>
      <div className="home-container12">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading1">
              <span className="Section-Heading home-text10">
                Pixel Knack Code Haven
              </span>
              <br></br>
            </h1>
            <span className="home-text12">
              Crafting Pixels into Functional Code
            </span>
            <span id="about" className="home-text13">
              Welcome to Pixel Knack Code Haven (PKCH), where creativity meets
              technology! I&apos;m [Your Name], a passionate developer dedicated
              to transforming ideas into reality through innovative web and
              mobile solutions
            </span>
            <div className="home-cta-btn-container">
              <button className="home-cta-btn1 Anchor button">
                <span className="home-text14">
                  Explore my Work (Comming Soon)
                </span>
              </button>
              <a
                href="mailto:mail@pkch.online?subject=Get in Touch"
                className="home-cta-btn2 Anchor button"
              >
                <span className="home-text15">Get in touch</span>
              </a>
            </div>
          </div>
          <div className="home-container13">
            <div className="home-container14">
              <div className="home-container15">
                <img
                  alt="image"
                  src="/avatar-1500w.png"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container1">
          <h2 className="home-text16">Key Skills/Services</h2>
        </div>
        <div className="home-cards-container">
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1170.2857142857142 1024"
                className="home-icon20"
              >
                <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading2 Card-Heading">Blockchain</span>
              <span className="home-text17">
                Blockchain Integration and Smart Contract Development-API
                Development and Database Management
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 1024 1024" className="home-icon22">
                <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading3 Card-Heading">Fullstack</span>
              <span className="home-text18">
                Full-Stack Development with Next.js
              </span>
            </div>
          </div>
          <div className="home-card3">
            <div className="home-icon-container3">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon24">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container3">
              <span className="home-heading4 Card-Heading">Design</span>
              <span className="home-text19">
                UI/UX Design for Exceptional User Experiences
              </span>
            </div>
          </div>
        </div>
      </div>
      <div id="packages" className="home-pricing">
        <div className="home-heading-container2">
          <h1 className="home-text20 Section-Heading">Ask for a quote</h1>
          <span className="home-text21">
            Ready to bring your project to life? Choose a service package that
            best fits your needs. Fill out the form below to get started!
          </span>
        </div>
        <div className="home-pricing-card-container">
          <div className="home-card4">
            <div className="home-card-heading1">
              <h1 className="home-type1">Minimal</h1>
              <span className="home-price1">
                <span>BASIC Package ⭐</span>
                <br></br>
                <span className="home-text24">$100</span>
              </span>
            </div>
            <div className="home-card-content1">
              <div className="home-feature1">
                <span className="home-name1">
                  Up to 3 pages Responsive web development.
                </span>
              </div>
              <div className="home-feature2">
                <span className="home-name2">
                  Basic UI/UX design tailored to your brand
                </span>
              </div>
              <div className="home-feature3">
                <span className="home-name3">Basic SEO optimization.</span>
              </div>
              <div className="home-feature4">
                <span className="home-name4">One round of revisions.</span>
              </div>
              <a
                href="mailto:mail@pkch.online?subject=Basic Package"
                className="home-choose button Anchor"
              >
                CHOOSE
              </a>
            </div>
            <span className="home-text25">
              Small businesses or personal projects looking for a
              straightforward online presence.
            </span>
          </div>
          <div className="home-card5">
            <div className="home-card-heading2">
              <h1 className="home-type2">Medium</h1>
              <span className="home-price2">
                <span>COMPLEX Package ⭐⭐ </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text29">$200</span>
              </span>
            </div>
            <div className="home-card-content2">
              <div className="home-container16">
                <span className="home-text30">
                  Up to 5 pages of responsive web development.
                </span>
              </div>
              <div className="home-container17">
                <span className="home-text31">
                  Advanced UI/UX design with user flow optimization.
                </span>
              </div>
              <div className="home-container18">
                <span className="home-text32">
                  Integration of up to 5 third-party APIs.
                </span>
              </div>
              <div className="home-container19">
                <span className="home-text33">
                  Enhanced SEO optimization strategies.
                </span>
              </div>
              <div className="home-container20">
                <span className="home-text34">Two rounds of revisions.</span>
              </div>
              <div className="home-container21">
                <span className="home-text35">
                  Basic database setup (e.g., PostgreSQL).
                </span>
              </div>
              <a
                href="mailto:mail@pkch.online?subject=Mdium Package"
                className="home-link7 Anchor button"
              >
                CHOOSE
              </a>
            </div>
            <span className="home-text36">
              Medium-sized businesses needing a more customized and functional
              solution.
            </span>
          </div>
          <div className="home-card6">
            <div className="home-card-heading3">
              <h1 className="home-type3">Premium</h1>
              <span className="home-price3">
                <span>PRO Package⭐⭐⭐</span>
                <br></br>
                <span className="home-text39">$1000</span>
              </span>
            </div>
            <div className="home-card-content3">
              <div className="home-container22">
                <span className="home-text40">
                  Unlimited pages of responsive web development.
                </span>
              </div>
              <div className="home-container23">
                <span>
                  Comprehensive UI/UX design with user testing and feedback
                  integration.
                </span>
              </div>
              <div className="home-container24">
                <span className="home-text42">
                  Full integration of unlimited third-party APIs.
                </span>
              </div>
              <div className="home-container25">
                <span className="home-text43">
                  <span>Advanced SEO optimization with ongoing support.</span>
                  <span className="home-text45 Card-Text"> four</span>
                </span>
              </div>
              <div className="home-container26">
                <span className="home-text46">
                  Multiple rounds of revisions as needed.
                </span>
              </div>
              <div className="home-container27">
                <span className="home-text47">
                  Complete database design and management.
                </span>
              </div>
              <div className="home-container28">
                <span className="home-text48">
                  Deployment and ongoing maintenance for 3 months.
                </span>
              </div>
              <a
                href="mailto:mail@pkch.online?subject=Premium Package"
                className="home-link8 Anchor button"
              >
                CHOOSE
              </a>
              <span className="home-text49">
                Larger businesses or startups requiring a full-fledged, scalable
                web solution.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-section-separator5"></div>
      <div id="faq" className="home-faqs">
        <h2 className="home-text50 Section-Heading">
          Check frequently asked questions
        </h2>
        <div className="home-content-container4">
          <div className="home-faq1">
            <div className="home-question-container1">
              <span className="home-question1">
                Have questions? We’ve got answers! Here are some of the most
                common inquiries from our clients.
              </span>
            </div>
            <div className="home-answer-container1">
              <span className="home-answer1">What services do you offer?</span>
              <span className="home-answer2">
                At Pixel Knack Code Haven, we specialize in web development,
                mobile application development, UI/UX design, blockchain
                integration, API development, and database management. Our goal
                is to create tailored solutions that meet your unique needs.
              </span>
            </div>
          </div>
          <div className="home-faq2">
            <div className="home-question-container2">
              <span className="home-question2">
                How long does it take to complete a project?
              </span>
            </div>
            <div className="home-answer-container2">
              <span className="home-answer3">
                he timeline for project completion varies based on the
                complexity and scope. Typically, our Basic Package takes 1-2
                weeks, the Complex Package takes 2-4 weeks, and the Professional
                Package can take 4-8 weeks. We’ll provide a more accurate
                estimate during our initial consultation.
              </span>
            </div>
          </div>
          <div className="home-faq3">
            <div className="home-question-container3">
              <span className="home-question3">
                What is your payment process?
              </span>
            </div>
            <div className="home-answer-container3">
              <span className="home-answer4">
                We require a 50% deposit before starting the project, with the
                remaining balance due upon completion. We accept various payment
                methods for your convenience.
              </span>
            </div>
          </div>
          <div className="home-faq4">
            <div className="home-question-container4">
              <span className="home-question4">
                Can I see examples of your work?
              </span>
            </div>
            <div className="home-answer-container4">
              <span className="home-answer5">
                Absolutely! You can check out our portfolio section to see some
                of the projects we&apos;ve completed. If you&apos;re interested
                in a specific type of work, just let us know!
              </span>
            </div>
          </div>
          <div className="home-faq5">
            <div className="home-question-container5">
              <span className="home-question5">
                How do you ensure the quality of your work?
              </span>
            </div>
            <div className="home-answer-container5">
              <span className="home-answer6">
                We follow industry best practices for coding, testing, and
                project management. We conduct regular code reviews, user
                testing, and iterations based on feedback to ensure the highest
                quality
              </span>
            </div>
          </div>
          <div className="home-faq6">
            <div className="home-question-container6">
              <span className="home-question6">
                What technologies do you use?
              </span>
            </div>
            <div className="home-answer-container6">
              <span className="home-answer7">
                We primarily use Next.js, React, Node.js, and PostgreSQL, among
                other technologies. However, we are always open to utilizing the
                best tools for your specific project.
              </span>
            </div>
          </div>
          <div className="home-faq7">
            <div className="home-question-container7">
              <span className="home-question7">
                Can you work with existing code or projects?
              </span>
            </div>
            <div className="home-answer-container7">
              <span className="home-answer8">
                Yes! We can review and improve existing projects, integrate new
                features, or help with debugging and optimization.
              </span>
            </div>
          </div>
          <div className="home-container29">
            <button className="home-cta-btn3 Anchor button">
              <span className="home-text51">GitHub</span>
            </button>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 22.027v-2.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 0 0-1.5-3.75a5.07 5.07 0 0 0-.09-3.77s-1.18-.35-3.91 1.48a13.4 13.4 0 0 0-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 0 0 5 5.797a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.58v2.87"></path>
                <path d="M9 20.027c-3 .973-5.5 0-7-3"></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-subscribe"></div>
      <div className="home-section-separator7"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon30">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="Anchor">Copyright, 2021</span>
          </div>
          <span className="home-text52">Made By Pixel Knack</span>
        </div>
      </div>
    </div>
  )
}

export default Home
