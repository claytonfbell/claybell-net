import Grid from "@material-ui/core/Grid"
import DarkModeToggle from "material-ui-pack/dist/DarkModeToggle"
import React from "react"
import Spacer from "./Spacer"

export default function Footer() {
  return (
    <>
      <Spacer size="large" />
      <Spacer size="large" />
      <Spacer size="large" />
      <Spacer size="large" />
      <Spacer size="large" />
      <Spacer size="large" />
      <Grid container justify="space-between" alignItems="center">
        <Grid item>{`Clayton Bell <claytonfbell@gmail.com>`}</Grid>
        <Grid item>
          <DarkModeToggle />
        </Grid>
      </Grid>
    </>
  )
}
