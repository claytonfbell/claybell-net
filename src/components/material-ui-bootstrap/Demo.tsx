import { Grid } from "@material-ui/core"
import {
  Alert,
  bootstrapColors,
  Button,
  Card,
  CardContent,
  CardHeader,
} from "material-ui-bootstrap"
import { DarkModeToggle } from "material-ui-pack"
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
          <Alert color={color} dismissible>
            A bootstrap alert
          </Alert>
        </Grid>
      ))}
      {bootstrapColors.map(color => (
        <Grid item xs={12} md={6}>
          <Card color={color}>
            <CardHeader>Cards</CardHeader>
            <CardContent>A bootstrap card</CardContent>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <DarkModeToggle />
      </Grid>
    </Grid>
  )
}
