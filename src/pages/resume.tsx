import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import { Grid, Link, styled, Typography, useTheme } from "@mui/material"
import React from "react"
import Layout, { LayoutComponents } from "../components/Layout"
import Spacer from "../components/Spacer"
import TechStack from "../components/TechStack"
import { employment } from "../employment"

// const TechStackPrint = Loadable(() => import("../components/TechStackPrint"))

const StyledLink = styled(Link)``

function ResumeContent() {
  const theme = useTheme()
  return (
    <>
      <Grid container justifyContent="space-between">
        <Grid item>
          <LayoutComponents.h1>Clayton Bell</LayoutComponents.h1>
          <Typography>
            <PhoneIcon fontSize="inherit" />
            <StyledLink
              sx={{
                marginLeft: theme.spacing(2),
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              href="tel:(971) 285-5666"
            >
              (971) 285-5666
            </StyledLink>
          </Typography>
          <Typography>
            <EmailIcon fontSize="inherit" />
            <StyledLink
              sx={{
                marginLeft: theme.spacing(2),
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              href="mailto: claytonfbell@gmail.com"
            >
              claytonfbell@gmail.com
            </StyledLink>
          </Typography>
        </Grid>
        {/* <Grid item>
          <Button
            href="/print"
            variant="contained"
            startIcon={<DownloadIcon />}
            color="primary"
          >
            <Hidden smDown>PDF Version</Hidden>
            <Hidden smUp>PDF</Hidden>
          </Button>
        </Grid> */}
      </Grid>
      <Spacer size="large" />
      <TechStack />
      {/* <TechStackPrint /> */}

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
      {/* <ResumeToggle /> */}
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
