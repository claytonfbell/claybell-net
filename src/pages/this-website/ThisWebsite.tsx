import Grid from "@material-ui/core/Grid"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"

export default function ThisWebsite(props) {
  const { darkMode } = useDarkMode()

  return (
    <StaticQuery
      query={graphql`
        query {
          mobile: file(relativePath: { eq: "claybell-net/mobile.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          mobileDark: file(
            relativePath: { eq: "claybell-net/mobile-dark.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          lighthouse: file(
            relativePath: { eq: "claybell-net/lighthouse.png" }
          ) {
            childImageSharp {
              fluid(maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={9} md={6}>
              <Img
                fluid={data.lighthouse.childImageSharp.fluid}
                alt="Mobile screenshot of this website"
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
              <Img
                fluid={
                  darkMode
                    ? data.mobileDark.childImageSharp.fluid
                    : data.mobile.childImageSharp.fluid
                }
                alt="Mobile screenshot of this website"
              />
            </Grid>
          </Grid>
        </>
      )}
    />
  )
}
