import {
  AppBar,
  Box,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Table,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import MenuIcon from "@material-ui/icons/Menu"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import React from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs"
import logoOnBlue from "../images/logo.svg"
import { pages, RoutePath } from "../pages"
import LayoutBase from "./LayoutBase"

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

const table = props => (
  <Box style={{ marginBottom: 12 }}>
    <Table padding={40} {...props} />
  </Box>
)

const code = props => (
  <SyntaxHighlighter {...props} style={vs2015} language="typescript" />
)
const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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

export default function Layout(props: {
  children: React.ReactNode
  location: { pathname: RoutePath }
}) {
  const classes = useStyles()

  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down("sm"))

  const [open, setOpen] = React.useState(false)
  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <LayoutBase>
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar} color="default">
          <Toolbar className={classes.toolbar}>
            {isSm && (
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
            <img
              style={{ maxHeight: 48 }}
              src={logoOnBlue}
              alt="Clayton Bell"
            />
          </Toolbar>
        </AppBar>

        <Drawer
          variant={!isSm ? "permanent" : "temporary"}
          classes={{
            paper: classes.drawerPaper,
          }}
          open={!isSm || open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            {pages.map(page => (
              <ListItem
                button
                component={Link}
                to={page.route}
                selected={props.location.pathname === page.route}
              >
                <ListItemText primary={page.title} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Paper style={{ padding: 24, marginTop: 24, minHeight: 2000 }}>
              <Typography component="div">
                <MDXProvider
                  components={{
                    h1,
                    h2,
                    h3,
                    code,
                    table,
                  }}
                >
                  {props.children}
                </MDXProvider>
              </Typography>
            </Paper>
          </Container>
        </main>
      </div>
    </LayoutBase>
  )
}
