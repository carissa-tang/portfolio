import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import { Grid } from "@mui/material"
import useViewport from "../utils/useViewport"
import Slide from "@mui/material/Slide"

const ProjectsPage = () => {
  const { isDesktop } = useViewport()
  const [checked, setChecked] = React.useState(false)
  const containerRef = React.useRef(null)
  const direction = isDesktop ? "up" : "right"

  React.useEffect(() => {
    setChecked(true)
  })

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
          <Grid item xs={12} sm={8} pl={1} mt={4}>
            <h1>projects</h1>
            <ul>
              <li>
                <a href="https://communityfridgekw.web.app/" target="_blank">
                  UW Blueprint - Community Fridge KW
                </a>{" "}
                <br />
                Community Fridge KW scheduling platform for food sharing and
                redistribution
              </li>
              <li>
                <a
                  href="https://app.qoom.io/~/projects/qoomschedulerSQUc/createevent"
                  target="_blank"
                >
                  Scheduling Web Application (2021)
                </a>{" "}
                <br />
                User-friendly tool to schedule events and invite guests to sign
                up at convenient times
              </li>
              <li>
                <a
                  href="https://www.carissatang.com/~/spring2021/cranial-check/index"
                  target="_blank"
                >
                  Symptom Checker Website (2021)
                </a>{" "}
                <br />
                Preliminary self-diagnosis tool with an authentication system
              </li>
            </ul>
          </Grid>
        </Slide>
      </Grid>
    </Layout>
  )
}

export default ProjectsPage
