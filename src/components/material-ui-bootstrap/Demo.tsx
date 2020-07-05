import { Grid } from "@material-ui/core"
import { Button } from "material-ui-bootstrap"
import Alert, { bootstrapColors } from "material-ui-bootstrap/dist/Alert"
import DarkModeToggle from "material-ui-pack/dist/DarkModeToggle"
import React from "react"

export default function Demo() {
  return (
    <Grid container spacing={2}>
      {bootstrapColors.map(color => (
        <Grid item xs={6} md={4} lg={3}>
          <Button fullWidth variant="contained" color={color}>
            {color}
          </Button>
        </Grid>
      ))}
      {bootstrapColors.map(color => (
        <Grid item xs={12} md={6}>
          <Alert color={color}>A bootstrap alert</Alert>
        </Grid>
      ))}
      <Grid item xs={12}>
        <DarkModeToggle />
      </Grid>
    </Grid>
  )
}
