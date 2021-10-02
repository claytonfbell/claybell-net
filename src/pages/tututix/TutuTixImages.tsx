import { Grid } from "@material-ui/core"
import React from "react"
// @ts-ignore
import desktop from "../../images/tutu/desktop-cal.png"
// @ts-ignore
import ipad from "../../images/tutu/ipad.png"
// @ts-ignore
import iphone from "../../images/tutu/iphone.png"
import ClickableImage from "../scan-tickets/ClickableImage"

export default function TutuTixImages() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={3}>
        <ClickableImage src={iphone} alt="TutuTix" />
      </Grid>
      <Grid item xs={12} sm={9}>
        <ClickableImage src={ipad} alt="TutuTix" />
      </Grid>
      <Grid item xs={12}>
        <ClickableImage src={desktop} alt="TutuTix" />
      </Grid>
    </Grid>
  )
}
