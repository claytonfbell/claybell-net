import React from "react"

import SEO from "../components/seo"
import Template from "../components/template"
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Fade,
  Breadcrumbs,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import Gravatar from "react-gravatar"
import Etix from "../images/etix-logo.png"
import InteractiveTicketing from "../images/it-logo.png"
import ElectricArrow from "../images/ea-logo.png"
import { useTimeout } from "react-use"
import Contact from "../components/contact"
import Link from "../components/link"

import phpLogo from "../images/tech/php.png"
import angularLogo from "../images/tech/angular.png"
import reactLogo from "../images/tech/react.png"
import mysqlLogo from "../images/tech/mysql.png"
import nginxLogo from "../images/tech/nginx.png"
import ubuntuLogo from "../images/tech/ubuntu.png"
import typescriptLogo from "../images/tech/typescript.png"
import dotnetLogo from "../images/tech/dotnet.png"
import appleLogo from "../images/tech/apple.png"

// slides
import tbwSlide from "../images/interactive-ticketing/tbw.jpg"
import mobileSlide from "../images/interactive-ticketing/mobile.png"
import reportsSlide from "../images/interactive-ticketing/reports.png"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  dates: {
    display: "block",
    marginBottom: theme.spacing(1),
  },
  logo: {
    filter: `grayscale(100%) brightness(70%)`,
    opacity: "0.6",
    width: `100%`,
    height: `auto`,
  },
  tbw: {
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const IndexPage = () => {
  const classes = useStyles()

  const gridItem = { xs: 2, sm: 2, md: 1, lg: 1 }

  return (
    <Template>
      <SEO title="Interactive Ticketing" />

      <Container maxWidth="lg">
        <Breadcrumbs aria-label="Breadcrumb">
          <Link color="inherit" to={`/`}>
            Home
          </Link>
          <Typography color="inherit">Interactive Ticketing</Typography>
        </Breadcrumbs>
      </Container>

      {/* Hero unit */}
      <div className={classes.heroContent}>
        <Fade in={true}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary"
              gutterBottom
            >
              Interactive Ticketing
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Engineer, Architect, and Administrator
            </Typography>
            <Typography
              variant="h5"
              align="center"
              className={classes.dates}
              color="textSecondary"
            >
              <CalendarTodayIcon fontSize="inherit" />
              {` `}
              2005 to Present
            </Typography>
          </Container>
        </Fade>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4} justify="center">
          <Grid item {...gridItem}>
            <img src={angularLogo} className={classes.logo} alt={`Angular`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={reactLogo} className={classes.logo} alt={`React`} />
          </Grid>
          <Grid item {...gridItem}>
            <img
              src={typescriptLogo}
              className={classes.logo}
              alt={`Typescript`}
            />
          </Grid>
          <Grid item {...gridItem}>
            <img src={phpLogo} className={classes.logo} alt={`PHP`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={mysqlLogo} className={classes.logo} alt={`MySQL`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={nginxLogo} className={classes.logo} alt={`Nginx`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={ubuntuLogo} className={classes.logo} alt={`Ubuntu`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={dotnetLogo} className={classes.logo} alt={`Dot Net`} />
          </Grid>
          <Grid item {...gridItem}>
            <img src={appleLogo} className={classes.logo} alt={`iOS`} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        <Grid container>
          <Grid item>
            <img
              className={classes.tbw}
              src={tbwSlide}
              alt={`Purchase Interface`}
            />
          </Grid>
          <Grid item>
            <img src={mobileSlide} alt={`Mobile`} />
          </Grid>
          <Grid item>
            <img src={reportsSlide} alt={`Manager`} />
          </Grid>
        </Grid>
      </Container>
    </Template>
  )
}

export default IndexPage
