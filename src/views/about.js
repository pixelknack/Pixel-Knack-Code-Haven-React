import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <Helmet>
        <title>About - Pixel Knack Code Haven</title>
        <meta
          name="description"
          content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
        />
        <meta property="og:title" content="About - Pixel Knack Code Haven" />
        <meta
          property="og:description"
          content="Welcome to Pixel Knack Code Haven (PKCH), where creativity meets technology."
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/66f0ce7c-0387-4e4e-bf51-9849219514e5/e17e7c8f-6850-44bb-bc07-c74ba842b248?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <Link to="/" className="about-navlink">
        <div className="about-container2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="about-icon1"
          >
            <path
              d="M5 12h14M5 12l4-4m-4 4l4 4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <h1 className="about-text100">Back</h1>
        </div>
      </Link>
      <div className="about-container3">
        <h1 className="about-text101">About Pixel Knack Code Haven</h1>
        <span className="about-text102">
          <span className="about-text103">
            Pixel Knack Code Haven is a full-service software development studio
            specializing in building scalable, high-performance web
            applications, mobile apps, and blockchain solutions. With a passion
            for technology and an eye for design, we strive to combine technical
            excellence with creative flair to deliver solutions that not only
            work but impress.
          </span>
          <br className="about-text104"></br>
          <br className="about-text105"></br>
          <span className="about-text106">Our Mission</span>
          <br className="about-text107"></br>
          <br className="about-text108"></br>
          <span className="about-text109">
            &quot;At PKCH, we are on a mission to empower businesses and
            individuals with digital solutions that drive growth, improve
            efficiency, and enhance user experiences. We believe that technology
            should be accessible, intuitive, and tailored to each client&apos;s
            needs. Our mission is to turn your vision into reality, one pixel at
            a time.&quot;
          </span>
          <br className="about-text110"></br>
          <br className="about-text111"></br>
          <span className="about-text112">Our Values</span>
          <br className="about-text113"></br>
          <br className="about-text114"></br>
          <span className="about-text115">Innovation</span>
          <br className="about-text116"></br>
          <span className="about-text117">
            &quot;We constantly push the boundaries of technology to deliver
            cutting-edge solutions. Whether it’s developing a complex web
            platform or integrating blockchain technology, we thrive on
            exploring new ideas and creating innovative experiences.&quot;
          </span>
          <br className="about-text118"></br>
          <br className="about-text119"></br>
          <span className="about-text120">Collaboration</span>
          <br className="about-text121"></br>
          <br className="about-text122"></br>
          <span className="about-text123">
            &quot;We believe that the best results come from strong
            collaboration. At PKCH, we work closely with our clients, involving
            them at every stage of the project to ensure that the final product
            reflects their vision and exceeds their expectations.&quot;
          </span>
          <br className="about-text124"></br>
          <br className="about-text125"></br>
          <span className="about-text126">Quality</span>
          <br className="about-text127"></br>
          <br className="about-text128"></br>
          <span className="about-text129">
            &quot;Quality is at the heart of everything we do. From clean,
            efficient code to thoughtful design, we take pride in delivering
            products that are not only visually appealing but also robust and
            reliable.&quot;
          </span>
          <br className="about-text130"></br>
          <br className="about-text131"></br>
          <span className="about-text132">Integrity</span>
          <br className="about-text133"></br>
          <br className="about-text134"></br>
          <span className="about-text135">
            &quot;We are committed to building long-term relationships with our
            clients based on trust and transparency. We communicate openly and
            honestly, ensuring that you are always informed and in control of
            your project.&quot;
          </span>
          <br className="about-text136"></br>
          <br className="about-text137"></br>
          <span className="about-text138">User-Centered Design</span>
          <br className="about-text139"></br>
          <br className="about-text140"></br>
          <span className="about-text141">
            &quot;At PKCH, we believe in creating solutions that prioritize user
            experience. Our approach ensures that every product we develop is
            intuitive, easy to navigate, and designed to meet the needs of its
            users.&quot;
          </span>
          <br className="about-text142"></br>
          <br className="about-text143"></br>
          <span className="about-text144">What We Do</span>
          <br className="about-text145"></br>
          <br className="about-text146"></br>
          <span className="about-text147">Custom Web Development</span>
          <br className="about-text148"></br>
          <br className="about-text149"></br>
          <span className="about-text150">
            &quot;From simple landing pages to complex web applications, we
            build responsive, scalable websites that deliver outstanding
            performance across all devices. Using frameworks like Next.js,
            React, and Node.js, we ensure that your website is optimized for
            both speed and SEO.&quot;
          </span>
          <br className="about-text151"></br>
          <br className="about-text152"></br>
          <span className="about-text153">Mobile Application Development</span>
          <br className="about-text154"></br>
          <br className="about-text155"></br>
          <span className="about-text156">
            &quot;We bring your mobile app ideas to life with seamless,
            user-friendly designs and top-tier performance. Whether you need an
            iOS, Android, or cross-platform app, we develop mobile solutions
            that enhance user engagement and drive business results.&quot;
          </span>
          <br className="about-text157"></br>
          <br className="about-text158"></br>
          <span className="about-text159">Blockchain Integration</span>
          <br className="about-text160"></br>
          <br className="about-text161"></br>
          <span className="about-text162">
            &quot;Embrace the future with our blockchain development services.
            We specialize in creating decentralized applications (dApps),
            integrating cryptocurrency payment systems, and building smart
            contracts for secure, transparent transactions.&quot;
          </span>
          <br className="about-text163"></br>
          <br className="about-text164"></br>
          <span className="about-text165">UI/UX Design</span>
          <br className="about-text166"></br>
          <br className="about-text167"></br>
          <span className="about-text168">
            &quot;Great design is not just about aesthetics but also about
            creating a seamless user experience. We focus on creating intuitive,
            user-centered designs that improve usability and ensure your users
            stay engaged with your platform.&quot;
          </span>
          <br className="about-text169"></br>
          <br className="about-text170"></br>
          <span className="about-text171">
            API Development &amp; Integration
          </span>
          <br className="about-text172"></br>
          <br className="about-text173"></br>
          <span className="about-text174">
            &quot;Enhance the functionality of your application with custom API
            development and integration. We create and integrate APIs that allow
            your app to connect with other services, increasing its capabilities
            and offering a seamless user experience.&quot;
          </span>
          <br className="about-text175"></br>
          <br className="about-text176"></br>
          <span className="about-text177">
            Database Design &amp; Management
          </span>
          <br className="about-text178"></br>
          <br className="about-text179"></br>
          <span className="about-text180">
            &quot;Data is the backbone of any modern application. We design and
            implement robust database architectures that ensure the security,
            scalability, and performance of your application. Whether you need
            SQL or NoSQL databases, we have the expertise to manage your data
            effectively.&quot;
          </span>
          <br className="about-text181"></br>
          <br className="about-text182"></br>
          <span className="about-text183">Why Choose Us?</span>
          <br className="about-text184"></br>
          <br className="about-text185"></br>
          <span className="about-text186">Expertise Across Industries</span>
          <br className="about-text187"></br>
          <span className="about-text188">
            &quot;With years of experience working across various industries,
            including fintech, e-commerce, healthcare, and more, we understand
            the unique challenges and opportunities that each industry presents.
            We tailor our solutions to meet the specific needs of your
            business.&quot;
          </span>
          <br className="about-text189"></br>
          <br className="about-text190"></br>
          <span className="about-text191">End-to-End Solutions</span>
          <br className="about-text192"></br>
          <br className="about-text193"></br>
          <span className="about-text194">
            &quot;At PKCH, we handle every aspect of your project from concept
            to deployment. Whether you need design, development, or ongoing
            support, we provide end-to-end services to ensure your project is a
            success.&quot;
          </span>
          <br className="about-text195"></br>
          <br className="about-text196"></br>
          <span className="about-text197">Cutting-Edge Technology</span>
          <br className="about-text198"></br>
          <br className="about-text199"></br>
          <span className="about-text200">
            &quot;We stay on the forefront of technological advancements to
            deliver solutions that are not only modern but future-proof. Whether
            it’s incorporating AI, machine learning, or blockchain, we integrate
            the latest technologies into our solutions.&quot;
          </span>
          <br className="about-text201"></br>
          <br className="about-text202"></br>
          <span className="about-text203">Agile Development Process</span>
          <br className="about-text204"></br>
          <br className="about-text205"></br>
          <span className="about-text206">
            &quot;Our agile approach ensures that your project stays on track
            and on budget. We believe in iterative development, meaning you’ll
            see progress early and often. This allows us to quickly adapt to
            changes and deliver the best possible product.&quot;
          </span>
          <br className="about-text207"></br>
          <br className="about-text208"></br>
          <span className="about-text209">Call to Action</span>
          <br className="about-text210"></br>
          <br className="about-text211"></br>
          <span className="about-text212">
            &quot;Ready to start your next project? Let’s bring your vision to
            life. Contact us today for a free consultation!&quot;
          </span>
          <br className="about-text213"></br>
          <br className="about-text214"></br>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default About
