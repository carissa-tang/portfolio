import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 style={{ textAlign: "center" }}>404: Not Found</h1>
    <p style={{ textAlign: "center" }}>
      Sorry, the page you were trying to access does not exist :(
    </p>
  </Layout>
)

export default NotFoundPage
