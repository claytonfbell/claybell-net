import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { technologies, TechnologyGroup } from "../technologies"
import TechItem from "./TechItem"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    borderRadius: 5,
  },
  title: {
    margin: theme.spacing(1),
  },
}))

export default function TechStack() {
  const classes = useStyles()
  const groups: TechnologyGroup[] = ["Front-End", "Backend", "DevOps"]

  return (
    <Box className={classes.root}>
      <Grid container spacing={1}>
        {groups.map(group => (
          <Grid item key={group} xs={12}>
            <Typography component="h2" className={classes.title}>
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
