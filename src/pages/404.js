import React from "react"
import LayoutBase from "../components/LayoutBase"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <LayoutBase>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </LayoutBase>
)

export default NotFoundPage
