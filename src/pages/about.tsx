import * as React from "react"
import PaletteIcon from "@mui/icons-material/Palette"
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism"
import SchoolIcon from "@mui/icons-material/School"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Link } from "gatsby"
import { styled } from "@mui/system"
import { Grid } from "@mui/material"
import {
  TabUnstyled,
  TabsUnstyled,
  TabsListUnstyled,
  TabPanelUnstyled,
  tabUnstyledClasses,
  buttonUnstyledClasses,
} from "@mui/base"

import { yellow } from "../utils/colors"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"

const AboutPage = () => {
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"

  React.useEffect(() => {
    setChecked(true)
  }, [])

  const CustomTab = styled(TabUnstyled)`
    font-family: Poppins, sans-serif;
    cursor: pointer;
    font-size: 0.875rem;
    background-color: transparent;
    width: 100%;
    padding: 12px 16px;
    margin: 6px 6px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    &:hover {
      background-color: ${yellow[400]};
    }

    &:focus {
      border-radius: 3px;
      outline: 2px solid ${yellow[200]};
      outline-offset: 2px;
    }

    &.${tabUnstyledClasses.selected} {
      background-color: ${yellow[50]};
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `

  const TabPanel = styled(TabPanelUnstyled)`
    font-size: 0.85rem;
    margin: 0 2rem;
    padding: 2rem;
    background-color: ${yellow[50]};
  `

  const TabsList = styled(TabsListUnstyled)`
    min-width: 320px;
    background-color: ${yellow[500]};
    border-radius: 8px;
    margin-top: 2rem;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
  `

  return (
    <Layout>
      <Seo title="about" />
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={4} pr={1} ref={containerRef}>
          <Profile fullSize={false} />
        </Grid>
        <Slide
          direction={direction}
          in={checked}
          container={containerRef.current}
          {...(checked ? { timeout: 800 } : {})}
        >
          <Grid item xs={12} sm={8} pl={1} mt={4} pr={[0, 5]}>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <h1>about me </h1>
              <p
                style={{
                  backgroundColor: `${yellow[100]}`,
                  borderRadius: "10px",
                  padding: "0.25rem 1rem",
                  margin: "0.5rem 1.5rem",
                }}
              >
                INFJ-T
              </p>
            </div>
            <p>
              Hi{" "}
              <span role="img" aria-label="wave">
                👋
              </span>{" "}
              - I'm Carissa. My favourite thing to do by far is to{" "}
              <strong> create</strong>!
              <br />
              <br />
              From making music to building web applications, I love finding new
              ways to integrate my creativity into projects I am working on. I
              also love to <strong>learn</strong>. When I am not falling down
              random rabbit holes, you can find me reading about recent tech
              advancements or picking up a new coding language.
              <br />
              <br />
              Check out my <Link to="/spotify"><u>top played songs on Spotify</u></Link>
            </p>
            <TabsUnstyled style={{ width: "90%" }} defaultValue={0}>
              {isDesktop ? (
                <TabsList>
                  <CustomTab>
                    <PaletteIcon style={{ marginRight: "0.5rem" }} />
                    creative arts
                  </CustomTab>
                  <CustomTab>
                    <VolunteerActivismIcon style={{ marginRight: "0.5rem" }} />
                    social initiatives
                  </CustomTab>
                  <CustomTab>
                    <SchoolIcon style={{ marginRight: "0.5rem" }} />
                    teaching
                  </CustomTab>
                </TabsList>
              ) : (
                <TabsList>
                  <CustomTab>
                    <PaletteIcon style={{ marginRight: "0.5rem" }} />
                  </CustomTab>
                  <CustomTab>
                    <VolunteerActivismIcon style={{ marginRight: "0.5rem" }} />
                  </CustomTab>
                  <CustomTab>
                    <SchoolIcon style={{ marginRight: "0.5rem" }} />
                  </CustomTab>
                </TabsList>
              )}
              <TabPanel value={0}>
                Training in ballet the last 12 years of my life has taught me
                how to be perseverant, a good team member, and to be confident.
                I have also picked up the piano, flute and violin over the
                years, and love having spontaneous guitar jam sessions.
              </TabPanel>
              <TabPanel value={1}>
                In Oct 2020, I co-founded a non-profit Indigenous organization
                called Project Bawaajigan that aims to educate the public and
                empower the native community. Leading weekly meetings and
                overseeing all operations has helped me develop my leadership,
                communication and delegatory skills.
              </TabPanel>
              <TabPanel value={2}>
                As an avid learner, I strive to share my knowledge with others.
                From working in summer camps and community programs to privately
                tutoring, I love seeing my students grow. Teaching has taught me
                to be patient, attentive, and a leader — skills which have
                enabled me to become a leader to my own peers.
              </TabPanel>
            </TabsUnstyled>
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default AboutPage
