import Box from "@material-ui/core/Box"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { graphql, Link } from "gatsby"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"
import Gravatar from "react-gravatar"
import { useTimeout } from "react-use"
import Contact from "../components/ContactDrawer"
import Footer from "../components/Footer"
import HomeTemplate from "../components/HomeTemplate"
import SEOComponent from "../components/SEOComponent"
import { useShowPrivate } from "../components/ShowPrivateProvider"
import mobileDark from "../images/claybell-net/mobile-dark.png"
import logoOnDark from "../images/logo-on-dark.svg"
import logo from "../images/logo.svg"
import { pages } from "../pages"

export const query = graphql`
  {
    allImageSharp(sort: { fields: [fluid___originalName], order: ASC }) {
      edges {
        node {
          resize(width: 300, height: 200) {
            src
          }
          fluid {
            originalName
            src
          }
        }
      }
    }
  }
`

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
  cardLink: {
    color: "#ffffff",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

interface Props {
  data: {
    allImageSharp: {
      edges: [
        {
          node: {
            resize: {
              src: string
            }
            fluid: {
              originalName: string
              src: string
            }
          }
        }
      ]
    }
  }
}

const IndexPageContent = (props: Props) => {
  const classes = useStyles()
  const showFirst = useTimeout(50)
  const showSecond = useTimeout(250)
  const { showPrivate } = useShowPrivate()
  const { darkMode } = useDarkMode()

  return (
    <>
      <SEOComponent title="Clayton Bell" imageSrc={mobileDark} />
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
        <Fade in={showSecond}>
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
                        title={page.title}
                        image={
                          props.data.allImageSharp.edges.find(
                            x =>
                              page.image.indexOf(x.node.fluid.originalName) !==
                              -1
                          ).node.resize.src
                        }
                      />
                    </Link>
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                        <Link className={classes.cardLink} to={page.route}>
                          {page.title}
                        </Link>
                      </Typography>

                      <Typography>{page.description}</Typography>
                    </CardContent>
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

export default function IndexPage(props) {
  return (
    <HomeTemplate>
      <IndexPageContent {...props} />
    </HomeTemplate>
  )
}
