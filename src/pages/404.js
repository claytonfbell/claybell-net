import { Container } from "@mui/material"
import React from "react"
import LayoutBase from "../components/LayoutBase"
import SEOComponent from "../components/SEOComponent"

const NotFoundPage = () => (
  <LayoutBase>
    <Container>
      <SEOComponent title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist...</p>
    </Container>
  </LayoutBase>
)

export default NotFoundPage
