//@ts-check

import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
      <StaticImage
        src="../images/headshot_2021.jpeg"
        width={150}
        imgStyle={{ borderRadius: '50%' }}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <h1>Carissa Tang</h1>
      <p>CS @ University of Waterloo</p>
      <p><FontAwesomeIcon icon={faLocationDot} /> Toronto, ON</p>
      <div style={{ marginTop: "10rem" }}>
        <p style={{ fontFamily: "Poppins" }}>
          <Link to="/about">about</Link>{" | "}
          <Link to="/projects">projects</Link>{" | "}
          <Link to="/blog">blog</Link>{" | "}
          <Link to="/">resume</Link>
        </p>
      </div>
      <p>
        <Link to="https://www.linkedin.com/in/carissatang/"><FontAwesomeIcon icon={faLinkedin} /></Link>{" "}
        <Link to="https://github.com/carissa-tang"><FontAwesomeIcon icon={faGithub} /></Link>{" "}
        <Link to="mailto:carissakytang@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
