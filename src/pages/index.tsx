import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Fade from "@material-ui/core/Fade"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Typography from "@material-ui/core/Typography"
import { graphql } from "gatsby"
import { useDarkMode } from "material-ui-pack"
import React from "react"
import Gravatar from "react-gravatar"
import useTimeout from "react-use/lib/useTimeout"
import Contact from "../components/ContactDrawer"
import HomeTemplate from "../components/HomeTemplate"
import SEOComponent from "../components/SEOComponent"
import logoOnDark from "../images/logo-on-dark.svg"
import logo from "../images/logo.svg"
import PageCards from "./home/PageCards"

export const query = graphql`
  query {
    mobileDark: file(relativePath: { eq: "claybell-net/mobile-dark.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(6),
  },
  heroButtons: {
    marginTop: theme.spacing(2),
  },
}))

interface Props {
  data: {
    mobileDark: {
      childImageSharp: {
        fluid: {
          base64: string
          aspectRatio: number
          src: string
          srcSet: string
          sizes: string
        }
      }
    }
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
  const { darkMode } = useDarkMode()

  return (
    <>
      <SEOComponent
        title="Clayton Bell"
        imageSrc={props.data.mobileDark.childImageSharp.fluid.src}
      />
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
      <PageCards />
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
