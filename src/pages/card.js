import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReportCard from "../components/reportCard"

const CardPage = () => (
  <Layout>
    <div style={{ margin: "3rem auto" }}>
      <ReportCard />
    </div>
  </Layout>
)

export default CardPage
