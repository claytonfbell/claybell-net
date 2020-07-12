import { Box, Grid, Typography } from "@material-ui/core"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import React from "react"
import { Technology } from "../technologies"
import Spacer from "./Spacer"

interface Props {
  technology: Technology
}
export default function TechItemPrint(props: Props) {
  const t = props.technology
  const classes = makeStyles((theme: Theme) => ({
    name: {
      fontSize: 12,
      color: "#000",
    },
    box: {
      marginRight: 16,
      textAlign: "center",
    },
  }))()

  return (
    <Grid item>
      <Box className={classes.box}>
        {t.icon}
        <Typography className={classes.name} align="center" color="primary">
          {t.name}
        </Typography>
        <Spacer />
      </Box>
    </Grid>
  )
}
