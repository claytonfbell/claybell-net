import Grid from "@material-ui/core/Grid"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"
import mobileDark from "../../images/claybell-net/mobile-dark.png"
import mobile from "../../images/claybell-net/mobile.png"
import ClickableImage from "../scan-tickets/ClickableImage"

export default function ThisWebsite() {
  const { darkMode } = useDarkMode()

  return (
    <Grid container spacing={3}>
      <Grid item xs={6} sm={4}>
        <ClickableImage src={darkMode ? mobileDark : mobile} alt="TutuTix" />
      </Grid>
    </Grid>
  )
}
