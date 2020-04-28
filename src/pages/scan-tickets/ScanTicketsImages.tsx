import { Grid } from "@material-ui/core"
import React from "react"
import invalid from "../../images/scan-tickets/invalid.png"
import ready from "../../images/scan-tickets/ready.png"
import valid from "../../images/scan-tickets/valid.png"

export default function ScanTicketsImages() {
  return (
    <Grid container spacing={3}>
      {[ready, valid, invalid].map(src => (
        <Grid item xs={6} sm={3} key={src}>
          <img style={{ width: "100%" }} src={src} alt="Mobile" />
        </Grid>
      ))}
    </Grid>
  )
}
