import  React from "react"

import Layout from "../components/layout"
import ReportCard from "../components/reportCard"

const CardPage = ({location}) => {
  const url = location.pathname ? location.pathname : '';

return (
  <Layout url={url}>
    <div style={{ margin: "4rem auto" }}>
      <ReportCard />
    </div>
  </Layout>

)
}

export default CardPage
