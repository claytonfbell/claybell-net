import { styled, useTheme } from "@mui/material"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Container from "@mui/material/Container"
import Fade from "@mui/material/Fade"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { graphql, Link, StaticQuery } from "gatsby"
import React from "react"
import useTimeout from "react-use/lib/useTimeout"
import Footer from "../../components/Footer"
import { useShowPrivate } from "../../components/ShowPrivateProvider"
import { pages } from "../../pages"

const StyledLink = styled(Link)``

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
  const showSecond = useTimeout(250)
  const { showPrivate } = useShowPrivate()
  const theme = useTheme()
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
        <Container
          sx={{
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
          }}
          maxWidth="md"
        >
          <Fade in={showSecond}>
            <Grid container spacing={2} justifyContent="center">
              {pages
                .filter(x => x.displayOnHome)
                .filter(x => !x.isPrivate || showPrivate === "yes")
                .map(page => (
                  <Grid item xs={10} sm={6} md={4} lg={3} key={page.route}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      variant="outlined"
                    >
                      <Link to={page.route}>
                        <CardMedia
                          sx={{
                            paddingTop: "56.25%", // 16:9
                            borderBottom: "1px solid " + theme.palette.divider,
                            "&:hover": {
                              opacity: 0.75,
                            },
                          }}
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
                      <CardContent
                        sx={{
                          flexGrow: 1,
                        }}
                      >
                        <Typography gutterBottom variant="h5" component="h2">
                          <StyledLink
                            sx={{
                              color: theme.palette.text.primary,
                              textDecoration: "none",
                              "&:hover": {
                                textDecoration: "underline",
                              },
                            }}
                            to={page.route}
                          >
                            {page.title}
                          </StyledLink>
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
