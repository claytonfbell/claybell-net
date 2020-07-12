import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import useTimeout from "react-use/lib/useTimeout"
import Footer from "../../components/Footer"
import { useShowPrivate } from "../../components/ShowPrivateProvider"
import { pages } from "../../pages"

const useStyles = makeStyles(theme => ({
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
    "&:hover": {
      opacity: 0.75,
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
  },
  cardLink: {
    color: theme.palette.text.primary,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}))

interface Data {
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

export default function PageCards() {
  const classes = useStyles()
  const showSecond = useTimeout(250)
  const { showPrivate } = useShowPrivate()

  return (
    <StaticQuery
      query={graphql`
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
      `}
      render={(data: Data) => (
        <Container className={classes.cardGrid} maxWidth="md">
          <Fade in={showSecond}>
            <Grid container spacing={2} justify="center">
              {pages
                .filter(x => x.displayOnHome)
                .filter(x => !x.isPrivate || showPrivate === "yes")
                .map(page => (
                  <Grid item xs={10} sm={6} md={4} lg={3} key={page.route}>
                    <Card className={classes.card} variant="outlined">
                      <Link to={page.route}>
                        <CardMedia
                          className={classes.cardMedia}
                          title={page.title}
                          image={
                            data.allImageSharp.edges.find(
                              x =>
                                page.image.indexOf(
                                  x.node.fluid.originalName
                                ) !== -1
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
      )}
    />
  )
}
