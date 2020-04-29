import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Drawer from "@material-ui/core/Drawer"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import Link from "@material-ui/core/Link"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import Paper from "@material-ui/core/Paper"
import makeStyles from "@material-ui/core/styles/makeStyles"
import useTheme from "@material-ui/core/styles/useTheme"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import { MDXProvider } from "@mdx-js/react"
import { Link as GatsbyLink } from "gatsby"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
import logoOnDark from "../images/logo-on-dark.svg"
import logo from "../images/logo.svg"
import { pages, RoutePath } from "../pages"
import { technologies, Technology } from "../technologies"
import Footer from "./Footer"
import LayoutBase from "./LayoutBase"
import SEOComponent from "./SEOComponent"
import Spacer from "./Spacer"
import useShowPrivate from "./useShowPrivate"

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

const a = props => <Link color="primary" {...props} target="_blank" />

const code = props => (
  <SyntaxHighlighter {...props} style={vs2015} language="typescript" />
)
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    "& table": {
      marginBottom: 24,
    },
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}))

interface Props {
  children: React.ReactNode
  location: { pathname: RoutePath }
}

function LayoutContent(props: Props) {
  const classes = useStyles()

  const theme = useTheme()
  const isSmDown = useMediaQuery(theme.breakpoints.down("sm"))
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"))

  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const showPrivate = useShowPrivate()

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
    <>
      <SEOComponent
        title={currentPage.title}
        description={currentPage.description}
      />
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar} color="default">
          <Toolbar>
            {isSmDown && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={classes.menuButton}
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
          classes={{
            paper: classes.drawerPaper,
          }}
          open={!isSmDown || open}
          onBackdropClick={() => setOpen(false)}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Hidden smDown>
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
                  selected={currentPage && page.route == currentPage.route}
                >
                  <ListItemText primary={page.title} />
                </ListItem>
              ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={11}>
                <Paper
                  style={{ padding: isLgUp ? 64 : 24 }}
                  elevation={isLgUp ? 3 : undefined}
                >
                  <Typography component="div">
                    <MDXProvider
                      components={{
                        a,
                        h1,
                        h2,
                        h3,
                        code,
                      }}
                    >
                      {props.children}
                    </MDXProvider>
                  </Typography>
                </Paper>
                <Hidden xsDown>
                  <Footer />
                </Hidden>
              </Grid>
              <Grid item xs={12} sm={1} style={{ textAlign: "center" }}>
                <Hidden smDown>
                  <Typography variant="caption">Stack</Typography>
                </Hidden>
                {currentTechnologies.map(t => (
                  <Tooltip arrow title={t.name} key={t.name}>
                    <IconButton href={t.url} target={t.name}>
                      {t.icon}
                    </IconButton>
                  </Tooltip>
                ))}
              </Grid>
            </Grid>
            <Hidden smUp>
              <Footer />
            </Hidden>
          </Container>
        </main>
      </div>
    </>
  )
}

export default function Layout(props: Props) {
  return (
    <LayoutBase>
      <LayoutContent {...props} />
    </LayoutBase>
  )
}
