//@ts-check

import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"

const IndexPage = () => (
  <Layout>
    <Seo title="home" />
    <Profile fullSize={true} />
  </Layout>
)

export default IndexPage
