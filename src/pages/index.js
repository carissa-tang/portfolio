//@ts-check

import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <StaticImage
        src="../images/headshot_2021.jpeg"
        width={150}
        imgStyle={{ borderRadius: "50%" }}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>Carissa Tang</h1>
      <p>CS @ University of Waterloo</p>
      <p>
        <FontAwesomeIcon icon={faLocationDot} /> Toronto, ON
      </p>
      <div style={{ marginTop: "10rem" }}>
        <p style={{ fontFamily: "Poppins" }}>
          <Link to="/about">about</Link>
          {" | "}
          <Link to="/projects">projects</Link>
          {" | "}
          <Link to="/blog">blog</Link>
          {" | "}
          <Link to="/">resume</Link>
        </p>
      </div>
      <p>
        <a
          href="https://www.linkedin.com/in/carissatang/"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>{" "}
        <a
          href="https://github.com/carissa-tang"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>{" "}
        <a
          href="mailto:carissakytang@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </p>
    </div>
  </Layout>
)

export default IndexPage
