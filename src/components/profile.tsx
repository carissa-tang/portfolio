import * as React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { StaticImage } from "gatsby-plugin-image"
import { Box } from "@mui/system"
import useViewport from "../utils/useViewport"
import TypeAnimation from "react-type-animation"

export default function Profile({ fullSize }: { fullSize: boolean }) {
  const { isDesktop } = useViewport()

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      {!isDesktop || !fullSize ? (
        <>
          <StaticImage
            src="../images/dev_carissatang.jpg"
            width={100}
            imgStyle={{ borderRadius: "50%" }}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginTop: "2rem", marginBottom: `1.45rem` }}
          />
          <h1 className="smallSize" style={{ textAlign: "center" }}>
            <Link to="/">Carissa Tang</Link>
          </h1>
          <p className="smallSize" style={{ textAlign: "center" }}>
            CS 👩🏻‍💻 @ UWaterloo
          </p>
          <p className="smallSize">
            <FontAwesomeIcon icon={faLocationDot} /> Toronto, ON
          </p>
          <p
            className="smallSize"
            style={{
              fontFamily: "Poppins",
              marginTop: "8rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
            <Link to="/blog">blog</Link>
            <Link
              to="https://drive.google.com/file/d/1kwKrQYAMlPon1yy0syDmh1U70Gxc0C-c/view"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </Link>
          </p>
        </>
      ) : (
        <>
          <StaticImage
            src="../images/dev_carissatang.jpg"
            width={150}
            imgStyle={{ borderRadius: "50%" }}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginTop: `1.45rem`, marginBottom: `1.45rem` }}
          />
          <h1 style={{ textAlign: "center" }}>
            <Link to="/">Carissa Tang</Link>
          </h1>
          <TypeAnimation
            cursor={true}
            style={{ textAlign: "center" }}
            sequence={[
              "cs 💻 @ uwaterloo",
              4000,
              "incoming swe intern @ linkedin",
              4000,
              "adventure-lover 🗺",
              4000,
              "foodie 😋",
              5000,
            ]}
            repeat={Infinity}
            wrapper="p"
          />
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Toronto, ON
          </p>

          <p style={{ fontFamily: "Poppins", marginTop: "10rem" }}>
            <Link to="/about">about</Link>
            {" | "}
            <Link to="/projects">projects</Link>
            {" | "}
            <Link to="/blog">blog</Link>
            {" | "}
            <Link
              to="https://drive.google.com/file/d/14j8sVPk39-zdoUWR94PCJcitrXqmv-ar/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </Link>
          </p>
        </>
      )}
      <br />
      <p style={{ marginBottom: "5rem" }}>
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
    </Box>
  )
}
