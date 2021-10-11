import { Box, Grid, Typography } from "@mui/material"
import { Spacer } from "material-ui-pack"
import React from "react"
import { Technology } from "../technologies"

interface Props {
  technology: Technology
}
export default function TechItemPrint(props: Props) {
  const t = props.technology

  return (
    <Grid item>
      <Box
        sx={{
          marginRight: 16,
          textAlign: "center",
        }}
      >
        {t.icon}
        <Typography
          sx={{
            fontSize: 12,
            color: "#000",
          }}
          align="center"
          color="primary"
        >
          {t.name}
        </Typography>
        <Spacer />
      </Box>
    </Grid>
  )
}
