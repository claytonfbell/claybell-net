import StarIcon from "@mui/icons-material/Star"
import { Grid } from "@mui/material"
import {
  Alert,
  bootstrapColors,
  Button,
  Card,
  CardContent,
  CardHeader,
  Label,
  Panel,
  PanelBody,
  PanelHeader,
} from "material-ui-bootstrap"
import { DarkModeToggle } from "material-ui-pack"
import React from "react"

export default function Demo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        {bootstrapColors.map(color => (
          <span key={color} style={{ marginRight: 4, marginBottom: 4 }}>
            <Button variant="contained" color={color} startIcon={<StarIcon />}>
              {color}
            </Button>
          </span>
        ))}
      </Grid>
      <Grid item xs={12}>
        {bootstrapColors.map(color => (
          <span key={color} style={{ marginRight: 4, marginBottom: 4 }}>
            <Label color={color}>{color} label</Label>
          </span>
        ))}
      </Grid>
      {bootstrapColors.map(color => (
        <Grid item xs={12} md={6} key={color}>
          <Alert color={color} dismissible>
            A bootstrap alert
          </Alert>
        </Grid>
      ))}
      {bootstrapColors.map(color => (
        <Grid item xs={12} md={6} key={color}>
          <Panel color={color}>
            <PanelHeader>Panel</PanelHeader>
            <PanelBody>A bootstrap 3 style panel</PanelBody>
          </Panel>
        </Grid>
      ))}
      {bootstrapColors.map(color => (
        <Grid item xs={12} md={6} key={color}>
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
