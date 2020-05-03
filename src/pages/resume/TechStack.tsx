import {
  Box,
  Grid,
  IconButton,
  makeStyles,
  Tooltip,
  Typography,
} from "@material-ui/core"
import React from "react"
import { technologies, TechnologyGroup } from "../../technologies"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    marginBottom: theme.spacing(3),
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
                <Tooltip key={t.name} arrow title={t.name}>
                  <IconButton href={t.url} target="_blank">
                    {t.icon}
                  </IconButton>
                </Tooltip>
              ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
