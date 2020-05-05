import { Button, Grid, Hidden, Link, Typography } from "@material-ui/core"
import makeStyles from "@material-ui/core/styles/makeStyles"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import React from "react"
import Layout, { LayoutComponents } from "../components/Layout"
import Spacer from "../components/Spacer"
import { employment } from "../employment"
import ResumeToggle from "./resume/ResumeToggle"
import TechStack from "./resume/TechStack"

const useStyles = makeStyles(theme => ({
  contactLink: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}))

function ResumeContent() {
  const classes = useStyles()
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <LayoutComponents.h1>Clayton Bell</LayoutComponents.h1>
          <Typography>
            <PhoneIcon fontSize="inherit" />
            <Link className={classes.contactLink} href="tel:(971) 285-5666">
              (971) 285-5666
            </Link>
          </Typography>
          <Typography>
            <EmailIcon fontSize="inherit" />
            <Link
              className={classes.contactLink}
              href="mailto: claytonfbell@gmail.com"
            >
              claytonfbell@gmail.com
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Button href="/print" variant="outlined">
            <Hidden xsDown>PDF Version</Hidden>
            <Hidden smUp>PDF</Hidden>
          </Button>
        </Grid>
      </Grid>
      <Spacer size="large" />

      <TechStack />

      {employment.map(e => (
        <>
          <Typography variant="h5" component="h2">
            {e.employer}
          </Typography>
          <Spacer />
          <Typography>
            <strong>
              {e.position} {e.range}
            </strong>
          </Typography>
          <Spacer />
          <Typography>{e.text}</Typography>
          {e.url !== undefined && (
            <Link target="_blank" href={e.url}>
              {e.url.replace(/^https?:\/\//g, "")}
            </Link>
          )}
          <Spacer size="large" />
        </>
      ))}
      <ResumeToggle />
    </>
  )
}

export default function Resume(props) {
  return (
    <Layout {...props}>
      <ResumeContent />
    </Layout>
  )
}
