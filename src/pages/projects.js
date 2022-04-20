import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Grid } from "@mui/material"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"
import { yellow } from "../utils/colors"

const ProjectsPage = () => {
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"

  React.useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <Layout>
      <Seo title="projects" />
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        ref={containerRef}
      >
        <Grid item xs={12} sm={4} pr={1}>
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
              <h1>projects </h1>
              <a
                href="https://github.com/carissa-tang"
                style={{
                  backgroundColor: `${yellow[100]}`,
                  borderRadius: "10px",
                  padding: "0.25rem 1rem",
                  margin: "0.5rem 1.5rem",
                  cursor: "pointer",
                }}
              >
                more on github
              </a>
            </div>
            <ul>
              <li>
                <a
                  href="https://schedule.communityfridgekw.ca/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontStyle: "italic" }}
                >
                  <bold>UW Blueprint - Community Fridge KW (Apr 2022)</bold>
                </a>{" "}
                <br />
                Community Fridge KW scheduling platform for food sharing and
                redistribution
              </li>
              <li>
                <a
                  href="https://schedule.communityfridgekw.ca/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontStyle: "italic" }}
                >
                  Pose Classifier Game - Google CSSI (Aug 2021)
                </a>{" "}
                <br />
                Live-multiplayer, pose classifier game where users race to
                recreate flashing poses, aimed to promote physical activity and
                improve short-term memory in a fun, competitive spirit
              </li>
              <li>
                <a
                  href="https://www.carissatang.com/~/spring2021/cranial-check/index"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontStyle: "italic" }}
                >
                  Symptom Checker Website (Aug 2021)
                </a>{" "}
                <br />
                Preliminary self-diagnosis tool with an authentication system
              </li>
              <li>
                <a
                  href="https://app.qoom.io/~/projects/qoomschedulerSQUc/createevent"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontStyle: "italic" }}
                >
                  Scheduling Web Application (Mar 2021)
                </a>{" "}
                <br />
                User-friendly tool to schedule events and invite guests to sign
                up at convenient times
              </li>
            </ul>
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default ProjectsPage
