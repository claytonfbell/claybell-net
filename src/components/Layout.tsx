import { MDXProvider } from "@mdx-js/react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import MenuIcon from "@mui/icons-material/Menu"
import {
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import Hidden from "@mui/material/Hidden"
import IconButton from "@mui/material/IconButton"
import Link from "@mui/material/Link"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Paper from "@mui/material/Paper"
import useTheme from "@mui/material/styles/useTheme"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import useMediaQuery from "@mui/material/useMediaQuery"
import { graphql, Link as GatsbyLink, StaticQuery } from "gatsby"
import { Spacer, useDarkMode } from "material-ui-pack"
import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
// @ts-ignore
import logoOnDark from "../images/logo-on-dark.svg"
// @ts-ignore
import logo from "../images/logo.svg"
import { pages, RoutePath } from "../pages"
import { technologies, Technology } from "../technologies"
import Footer from "./Footer"
import LayoutBase from "./LayoutBase"
import SEOComponent from "./SEOComponent"
import { useShowPrivate } from "./ShowPrivateProvider"
import TechItem from "./TechItem"

const h1 = props => (
  <Box style={{ marginBottom: 12 }}>
    <Typography variant="h4" component="h1" {...props} />
  </Box>
)
const h2 = props => (
  <Box style={{ marginBottom: 12 }}>
    <Typography variant="h5" component="h2" {...props} />
  </Box>
)

const h3 = props => (
  <Box style={{ marginBottom: 12 }}>
    <Typography variant="h6" component="h3" {...props} />
  </Box>
)

const table = props => <Table {...props} />
const thead = props => <TableHead {...props} />
const tbody = props => <TableBody {...props} />
const tr = props => <TableRow {...props} />
const td = props => <TableCell>{props.children}</TableCell>
const th = props => <TableCell>{props.children}</TableCell>

const a = props => <Link color="primary" {...props} target="_blank" />

const code = props => (
  <SyntaxHighlighter {...props} style={vs2015} language="typescript" />
)

export const LayoutComponents = {
  h1,
  h2,
  h3,
  a,
  code,
  table,
  thead,
  tbody,
  tr,
  td,
  th,
}

const drawerWidth = 240

const StyledMain = styled("main")``

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

interface Props {
  children: React.ReactNode
  location: { pathname: RoutePath }
}

function LayoutContent(props: Props) {
  const theme = useTheme()
  const isXsDown = useMediaQuery(theme.breakpoints.down("sm"))
  const isSmDown = useMediaQuery(theme.breakpoints.down("md"))
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"))

  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const { showPrivate } = useShowPrivate()

  const currentPage = pages.find(
    x => x.route === props.location.pathname.replace(/\/$/, "")
  )

  const currentTechnologies: Technology[] =
    (currentPage &&
      currentPage.stack &&
      currentPage.stack.map(tech => technologies.find(x => x.name === tech))) ||
    []

  const { darkMode } = useDarkMode()

  return (
    <StaticQuery
      query={graphql`
        {
          allImageSharp(sort: { fields: [fluid___originalName], order: ASC }) {
            edges {
              node {
                resize(width: 800, height: 600) {
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
      render={(data: Data) => {
        const imageSrc = data.allImageSharp.edges.find(
          x => currentPage.image.indexOf(x.node.fluid.originalName) !== -1
        ).node.resize.src

        return (
          <>
            <SEOComponent
              title={currentPage.title}
              description={currentPage.description}
              imageSrc={imageSrc}
            />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <AppBar
                position="absolute"
                sx={{
                  zIndex: theme.zIndex.drawer + 1,
                  transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                  }),
                }}
                color="default"
                elevation={1}
              >
                <Toolbar>
                  {isSmDown && (
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      sx={{
                        marginRight: 36,
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                  <GatsbyLink to="/">
                    <img
                      style={{ height: 48, marginBottom: 0 }}
                      src={darkMode ? logoOnDark : logo}
                      alt="Clayton Bell"
                    />
                  </GatsbyLink>
                </Toolbar>
              </AppBar>

              <Drawer
                variant={!isSmDown ? "permanent" : "temporary"}
                PaperProps={{
                  sx: {
                    position: "relative",
                    whiteSpace: "nowrap",
                    width: drawerWidth,
                    transition: theme.transitions.create("width", {
                      easing: theme.transitions.easing.sharp,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                  },
                }}
                open={!isSmDown || open}
                onBackdropClick={() => setOpen(false)}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    padding: "0 8px",
                    ...theme.mixins.toolbar,
                  }}
                >
                  <IconButton
                    onClick={handleDrawerClose}
                    aria-label="Hide Navigation"
                  >
                    <ChevronLeftIcon />
                  </IconButton>
                </Box>
                <Hidden mdDown>
                  <Spacer />
                </Hidden>
                <List>
                  {pages
                    .filter(x => !x.isPrivate || showPrivate === "yes")
                    .map(page => (
                      <ListItem
                        button
                        component={GatsbyLink}
                        to={page.route}
                        selected={
                          currentPage && page.route == currentPage.route
                        }
                      >
                        <ListItemText primary={page.title} />
                      </ListItem>
                    ))}
                </List>
              </Drawer>
              <StyledMain
                sx={{
                  flexGrow: 1,
                  height: "100vh",
                  overflow: "auto",
                }}
              >
                <Spacer size={8} />
                <Container
                  maxWidth="lg"
                  sx={{
                    paddingTop: theme.spacing(4),
                    paddingBottom: theme.spacing(4),
                    "& table": {
                      marginBottom: 24,
                    },
                  }}
                >
                  <Paper elevation={1}>
                    <Box padding={isLgUp ? 6 : isXsDown ? 2 : 4}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={10}>
                          <Box>
                            <Typography component="div">
                              <MDXProvider components={LayoutComponents}>
                                {props.children}
                              </MDXProvider>
                            </Typography>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          md={2}
                          style={{
                            textAlign: isSmDown ? "center" : "right",
                          }}
                        >
                          {currentTechnologies.length > 0 && (
                            <div
                              style={
                                !isSmDown
                                  ? {
                                      display: "inline-block",
                                      width: 90,
                                      textAlign: "right",
                                    }
                                  : undefined
                              }
                            >
                              <Typography variant="caption" component="div">
                                Stack Used
                              </Typography>
                              {currentTechnologies.map(t => (
                                <TechItem
                                  key={t.name}
                                  technology={t}
                                  placement="left"
                                />
                              ))}
                            </div>
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  </Paper>
                  <Hidden smDown>
                    <Footer />
                  </Hidden>
                  <Hidden smUp>
                    <Footer />
                  </Hidden>
                </Container>
              </StyledMain>
            </Box>
          </>
        )
      }}
    />
  )
}

export default function Layout(props: Props) {
  return (
    <LayoutBase>
      <LayoutContent {...props} />
    </LayoutBase>
  )
}
