import { Grid } from "@material-ui/core"
import React from "react"
import desktop from "../../images/tutu/desktop-cal.png"
import ipad from "../../images/tutu/ipad.png"
import iphone from "../../images/tutu/iphone.png"

export default function TutuTixImages() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
        <img style={{ width: "100%" }} src={iphone} alt="Mobile" />
      </Grid>
      <Grid item xs={6} sm={9}>
        <img style={{ width: "100%" }} src={ipad} alt="Mobile" />
      </Grid>
      <Grid item xs={12}>
        <img style={{ width: "100%" }} src={desktop} alt="Mobile" />
      </Grid>
    </Grid>
  )
}
