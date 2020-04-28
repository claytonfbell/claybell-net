import { Grid } from "@material-ui/core"
import React from "react"
import invalid from "../../images/scan-tickets/invalid-win.png"
import ready from "../../images/scan-tickets/ready-win.png"
import valid from "../../images/scan-tickets/valid-win.png"

export default function ScanTicketsWindowsImages() {
  return (
    <Grid container spacing={3}>
      {[ready, valid, invalid].map(src => (
        <Grid item xs={12} sm={6} key={src}>
          <img style={{ width: "100%" }} src={src} alt="Mobile" />
        </Grid>
      ))}
    </Grid>
  )
}
