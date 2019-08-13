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
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const IndexPage = () => {
  const classes = useStyles()
  const showFirst = useTimeout(0)
  const showSecond = useTimeout(50)
  const showThird = useTimeout(100)

  return (
    <Template>
      <SEO title="Clayton Bell" />

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
              Clayton Bell
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Experienced, Productive, Creative
            </Typography>

            <center>
              <Gravatar
                style={{ borderRadius: `50%` }}
                size={128}
                email={`claytonfbell@gmail.com`}
              />
            </center>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Contact />
                  {/* <Button variant="contained" color="primary">
                    About Me
                  </Button> */}
                </Grid>
              </Grid>
            </div>
          </Container>
        </Fade>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          <Fade in={showFirst}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  style={{ backgroundColor: "#ddd" }}
                  className={classes.cardMedia}
                  image={Etix}
                  title="Etix"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Etix
                  </Typography>
                  <Typography variant="caption" color="primary">
                    Software Engineer
                  </Typography>
                  <br />
                  <Typography
                    variant="caption"
                    className={classes.dates}
                    color="primary"
                  >
                    <CalendarTodayIcon fontSize="inherit" />
                    {` `}
                    2017 to Present
                  </Typography>
                  <Typography>
                    After Interactive Ticketing was acquired, I stayed on to
                    continue running the Interactive Ticketing platform while
                    taking on many new projects for Etix.
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    More Info
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Fade>

          <Fade in={showSecond}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  style={{ backgroundColor: "#ddd" }}
                  className={classes.cardMedia}
                  image={InteractiveTicketing}
                  title="Interactive Ticketing"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Interactive Ticketing
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {" "}
                    Engineer, Architect, and Administrator
                  </Typography>
                  <br />
                  <Typography
                    variant="caption"
                    className={classes.dates}
                    color="primary"
                  >
                    <CalendarTodayIcon fontSize="inherit" />
                    {` `}
                    2005 to Present
                  </Typography>
                  <Typography>
                    Architected and developed the Interactive Ticketing platform
                    and I'm the sole tech administrator.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={`/interactive-ticketing`}
                    size="small"
                    color="primary"
                  >
                    More Info
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Fade>
          <Fade in={showThird}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  style={{ backgroundColor: "#ddd" }}
                  className={classes.cardMedia}
                  image={ElectricArrow}
                  title="Electric Arrow"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Electric Arrow
                  </Typography>
                  <Typography variant="caption" color="primary">
                    {" "}
                    Engineer, Architect, and Administrator
                  </Typography>
                  <br />
                  <Typography
                    variant="caption"
                    className={classes.dates}
                    color="primary"
                  >
                    <CalendarTodayIcon fontSize="inherit" />
                    {` `}
                    1999 to 2005
                  </Typography>
                  <Typography>
                    Architected and developed the Live Pages CMS and E-Commerce
                    platform.
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small" color="primary">
                    More Info
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          </Fade>
        </Grid>
      </Container>
    </Template>
  )
}

export default IndexPage
