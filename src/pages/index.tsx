import { Hidden, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Fade from "@mui/material/Fade"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { graphql } from "gatsby"
import { useDarkMode } from "material-ui-pack"
import React from "react"
import Gravatar from "react-gravatar"
import useTimeout from "react-use/lib/useTimeout"
import Contact from "../components/ContactDrawer"
import HomeTemplate from "../components/HomeTemplate"
import SEOComponent from "../components/SEOComponent"
// @ts-ignore
import logoOnDark from "../images/logo-on-dark.svg"
// @ts-ignore
import logo from "../images/logo.svg"
import { technologies } from "../technologies"
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
  const theme = useTheme()
  const showFirst = useTimeout(50)
  const { darkMode } = useDarkMode()

  return (
    <>
      <SEOComponent
        title="Clayton Bell"
        imageSrc={props.data.mobileDark.childImageSharp.fluid.src}
        description={`Clayton Bell • Software Engineer • Portland Oregon ${technologies
          .map(x => x.name)
          .join(", ")}`}
      />
      <Paper
        sx={{
          padding: theme.spacing(2),
          [theme.breakpoints.up("md")]: {
            padding: theme.spacing(6),
          },
        }}
      >
        <Fade in={true}>
          <Container maxWidth="sm">
            <Fade in={showFirst}>
              <img src={darkMode ? logoOnDark : logo} alt="Clayton Bell" />
            </Fade>
            <Hidden smDown>
              <NoBreak>
                <Typography
                  align="center"
                  sx={{
                    fontSize: 24,
                  }}
                >
                  Software Engineer • Portland Oregon
                </Typography>
              </NoBreak>
            </Hidden>
            <Hidden smUp>
              <Typography align="center" sx={{ fontSize: 24 }}>
                Software Engineer
              </Typography>
              <Typography align="center" sx={{ fontSize: 24 }}>
                Portland Oregon
              </Typography>
            </Hidden>
            <Hidden smDown>
              <Typography align="center" sx={{ fontSize: 24 }}>
                Experienced, Productive, Creative
              </Typography>
            </Hidden>
            <br />
            <Box textAlign="center">
              <Gravatar
                style={{
                  borderRadius: `50%`,
                }}
                size={128}
                email={`claytonfbell@gmail.com`}
              />
            </Box>
            <Box sx={{ marginTop: theme.spacing(2) }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Contact />
                </Grid>
              </Grid>
            </Box>
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

function NoBreak({ children }: { children: React.ReactNode }) {
  return <span style={{ whiteSpace: "nowrap" }}>{children}</span>
}
