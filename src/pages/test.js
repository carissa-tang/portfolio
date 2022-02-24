import * as React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Seo from "../components/seo"

const TestPage = () => (
  <Layout>
    <Seo title="test" />
    <body style={{ height: "100%", width: "100%", margin: "0", padding: "0", overflow: "hidden" }}>
        <div id="particle-canvas" style={{ width: "100%", height: "100%" }}>hello</div>
        <Helmet>
            <script type="text/javascript" src="particle-network.min.js"></script>
        </Helmet>
    </body>
  </Layout>
)

export default TestPage
