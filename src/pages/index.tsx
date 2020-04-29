import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"
import Gravatar from "react-gravatar"
import { useTimeout } from "react-use"
import Contact from "../components/ContactDrawer"
import Footer from "../components/Footer"
import HomeTemplate from "../components/HomeTemplate"
import SEOComponent from "../components/SEOComponent"
import useShowPrivate from "../components/useShowPrivate"
import logoOnDark from "../images/logo-on-dark.svg"
import logo from "../images/logo.svg"
import { pages } from "../pages"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    // backgroundColor: theme.palette.background.paper,
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
    borderBottom: "1px solid " + theme.palette.divider,
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

const IndexPageContent = () => {
  const classes = useStyles()
  const showFirst = useTimeout(50)
  const showThird = useTimeout(250)
  const showPrivate = useShowPrivate()
  const { darkMode } = useDarkMode()

  return (
    <>
      <SEOComponent title="Clayton Bell" />
      <Paper className={classes.heroContent}>
        <Fade in={true}>
          <Container maxWidth="sm">
            <Fade in={showFirst}>
              <img src={darkMode ? logoOnDark : logo} alt="Clayton Bell" />
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
      </Paper>
      <Container className={classes.cardGrid} maxWidth="md">
        <Fade in={showThird}>
          <Grid container spacing={2} justify="center">
            {pages
              .filter(x => x.displayOnHome)
              .filter(x => !x.isPrivate || showPrivate === "yes")
              .map(page => (
                <Grid item xs={10} sm={6} md={4} lg={3} key={page.route}>
                  <Card className={classes.card}>
                    <Link to={page.route}>
                      <CardMedia
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
        <Footer />
      </Container>
    </>
  )
}

export default function IndexPage() {
  return (
    <HomeTemplate>
      <IndexPageContent />
    </HomeTemplate>
  )
}
