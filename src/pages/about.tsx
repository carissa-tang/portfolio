import * as React from "react"
import { useState } from "react"
import List from "@mui/material/List"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Collapse from "@mui/material/Collapse"
import PaletteIcon from "@mui/icons-material/Palette"
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ArrowRightIcon from "@mui/icons-material/ArrowRight"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Grid from "@mui/material/Grid"

const AboutPage = () => {
  const [openPalette, setOpenPalette] = useState(false);
  const [openCharity, setOpenCharity] = useState(false);
  const [openTeaching, setOpenTeaching] = useState(false);

  const handlePaletteClick = () => {
    setOpenPalette(!openPalette)
  }

  const handleCharityClick = () => {
    setOpenCharity(!openCharity)
  }

  const handleTeachingClick = () => {
    setOpenTeaching(!openTeaching)
  }

  return (
    <Layout>
      <Seo title="about" />
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={4} pr={1}>
          <Profile fullSize={false} />
        </Grid>
        <Grid item xs={12} sm={8} pl={1} mt={4}>
          <h1>about me</h1>
          <p>
            Hi - I'm Carissa, a freshman studying Computer Science at the
            University of Waterloo. My favourite thing to do by far is to 
            <strong> create</strong>!
            <br />
            <br />
            From making music to building web applications, I love finding new
            ways to integrate my creativity into projects I am working on. I
            also love to <strong>learn</strong>. You can always find me reading about recent tech
            advancements or picking up a new coding language.
          </p>
          <h3 style={{ marginTop: "4rem" }}>more</h3>
          <List>
            <ListItemButton onClick={handlePaletteClick}>
              {openPalette ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              <ListItemIcon sx={{ pl: 2 }}>
                <PaletteIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                }}
                primary="creative arts"
              />
            </ListItemButton>
            <Collapse in={openPalette} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontFamily: "Courier New",
                      fontSize: "0.8rem",
                    }}
                    primary="Training in ballet the last 12 years of my life has taught
                    me how to be perseverant, a good team member, and to be
                    confident. I have also picked up the piano, flute and violin
                    over the years, and love having spontaneous guitar jam
                    sessions. Check out my cover of Memories by Maroon 5!"
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List>
            <ListItemButton onClick={handleCharityClick}>
              {openCharity ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              <ListItemIcon sx={{ pl: 2 }}>
                <VolunteerActivismIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                }}
                primary="social initiatives"
              />
            </ListItemButton>
            <Collapse in={openCharity} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontFamily: "Courier New",
                      fontSize: "0.8rem",
                    }}
                    primary="In Oct 2020, I co-founded an Indigenous non-profit organization called Project Bawaajigan that aims to educate the public and empower the native community. Leading weekly meetings and overseeing all operations has helped me develop my leadership, communication and delegatory skills."
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          <List>
            <ListItemButton onClick={handleTeachingClick}>
              {openTeaching ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
              <ListItemIcon sx={{ pl: 2 }}>
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText
                primaryTypographyProps={{
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                }}
                primary="teaching"
              />
            </ListItemButton>
            <Collapse in={openTeaching} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 8 }}>
                  <ListItemText
                    primaryTypographyProps={{
                      fontFamily: "Courier New",
                      fontSize: "0.8rem",
                    }}
                    primary="As an avid learner, I strive to share my knowledge with others. From working in summer camps and community programs to privately tutoring, I love seeing my students grow. Teaching has taught me to be patient, attentive, and a leader — skills which have enabled me to become a leader to my own peers."
                  />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AboutPage
