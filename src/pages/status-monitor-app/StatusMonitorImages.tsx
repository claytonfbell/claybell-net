import Grid from "@material-ui/core/Grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useDarkMode } from "material-ui-pack"
import React from "react"

export default function StatusMonitorImages(props) {
  const { darkMode } = useDarkMode()

  return (
    <StaticQuery
      query={graphql`
        query {
          mobile: file(
            relativePath: { eq: "status-monitor/status-monitor1.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          screen2: file(
            relativePath: { eq: "status-monitor/status-monitor2.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Img
                fluid={data.mobile.childImageSharp.fluid}
                alt="Main dashboard screenshot"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Img
                fluid={data.screen2.childImageSharp.fluid}
                alt="Report graph screenshot"
              />
            </Grid>
          </Grid>
        </>
      )}
    />
  )
}
