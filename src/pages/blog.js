import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"
import Grid from "@mui/material/Grid"

const BlogPage = () => {
  return (
    <Layout>
      <Seo title="projects" />
      <Grid container justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={12} sm={4} pr={1}>
          <Profile fullSize={false} />
        </Grid>
        <Grid item xs={12} sm={8} pl={1} mt={4}>
          <h1>blog</h1>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default BlogPage
