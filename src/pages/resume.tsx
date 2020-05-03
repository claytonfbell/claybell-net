import { Button, Grid, Typography } from "@material-ui/core"
import CloudDownload from "@material-ui/icons/CloudDownload"
import EmailIcon from "@material-ui/icons/Email"
import PhoneIcon from "@material-ui/icons/Phone"
import React from "react"
import Layout, { LayoutComponents } from "../components/Layout"
import Spacer from "../components/Spacer"
import { employment } from "../employment"
import ResumeToggle from "./resume/ResumeToggle"
import TechStack from "./resume/TechStack"
function ResumeContent(props) {
  return (
    <>
      <Grid container justify="space-between">
        <Grid item>
          <LayoutComponents.h1>Clayton Bell</LayoutComponents.h1>
          <Typography>
            <PhoneIcon fontSize="inherit" /> (971) 285-5666
          </Typography>
          <Typography>
            <EmailIcon fontSize="inherit" /> claytonfbell@gmail.com
          </Typography>
          <Spacer size="large" />
        </Grid>
        <Grid item>
          <Button
            href="/print"
            variant="outlined"
            startIcon={<CloudDownload />}
          >
            PDF Version
          </Button>
        </Grid>
      </Grid>

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
