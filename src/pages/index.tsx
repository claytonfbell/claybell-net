import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import React from "react"
import Gravatar from "react-gravatar"
import { useTimeout } from "react-use"
import Contact from "../components/ContactDrawer"
import HomeTemplate from "../components/HomeTemplate"
import SEOComponent from "../components/SEOComponent"
import logo from "../images/logo.svg"
import { pages } from "../pages"

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
  const showFirst = useTimeout(50)
  const showSecond = useTimeout(150)
  const showThird = useTimeout(250)

  return (
    <HomeTemplate>
      <SEOComponent title="Clayton Bell" />

      <div className={classes.heroContent}>
        <Fade in={true}>
          <Container maxWidth="sm">
            <Fade in={showFirst}>
              <img src={logo} alt="Clayton Bell" />
            </Fade>
            <Typography variant="h5" align="center" paragraph>
              Experienced, Productive, Creative
            </Typography>
            <Box textAlign="center">
              <Gravatar
                style={{
                  borderRadius: `50%`,
                }}
                size={128}
                email={`claytonfbell@gmail.com`}
              />
            </Box>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Contact />
                </Grid>
              </Grid>
            </div>
          </Container>
        </Fade>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Fade in={showThird}>
          <Grid container spacing={4}>
            {pages
              .filter(x => x.displayOnHome)
              .map(page => (
                <Grid item xs={12} sm={6} md={4} key={page.route}>
                  <Card className={classes.card}>
                    <Link to={page.route}>
                      <CardMedia
                        style={{ backgroundColor: "#ddd" }}
                        className={classes.cardMedia}
                        image={page.image}
                        title={page.title}
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {page.title}
                      </Typography>

                      <Typography>{page.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button component={Link} to={page.route}>
                        More Info
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
          </Grid>
        </Fade>
      </Container>
    </HomeTemplate>
  )
}

export default IndexPage
