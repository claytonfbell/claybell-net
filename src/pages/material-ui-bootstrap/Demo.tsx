import { Grid } from "@material-ui/core"
import { Button } from "material-ui-bootstrap"
import { bootstrapColors } from "material-ui-bootstrap/dist/Alert"
import DarkModeToggle from "material-ui-pack/dist/DarkModeToggle"
import React from "react"

export default function Demo() {
  return (
    <Grid container spacing={2}>
      {bootstrapColors.map(color => (
        <Grid item xs={12} sm={6}>
          <Button variant="contained" color={color}>
            {color}
          </Button>
        </Grid>
      ))}
      <Grid item xs={12} sm={6}>
        <DarkModeToggle />
      </Grid>
    </Grid>
  )
}
