import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "@material-ui/core/Link"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import theme from "../theme"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {". Built with "}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>
  )
}
const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
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
    padding: theme.spacing(6),
  },
  github: {
    zIndex: 100000,
  },
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function ThemeIt({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}

export default function Template({ children }) {
  const classes = useStyles()

  return (
    <ThemeIt>
      <React.Fragment>
        <CssBaseline />
        <main>{children}</main>
      </React.Fragment>
    </ThemeIt>
  )
}
