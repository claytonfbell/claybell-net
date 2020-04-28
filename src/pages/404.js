import { Container } from "@material-ui/core"
import React from "react"
import LayoutBase from "../components/LayoutBase"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <LayoutBase>
    <Container>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Container>
  </LayoutBase>
)

export default NotFoundPage
