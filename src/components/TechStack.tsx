import { Box, Grid, Typography, useTheme } from "@mui/material"
import React from "react"
import { technologies, TechnologyGroup } from "../technologies"
import TechItem from "./TechItem"

export default function TechStack() {
  const theme = useTheme()
  const groups: TechnologyGroup[] = ["Front-End", "Backend", "DevOps"]

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        borderRadius: 5,
      }}
    >
      <Grid container spacing={1}>
        {groups.map(group => (
          <Grid item key={group} xs={12}>
            <Typography component="h2" sx={{ margin: theme.spacing(1) }}>
              {group}
            </Typography>
            {technologies
              .filter(x => x.group === group)
              .map(t => (
                <TechItem technology={t} />
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
