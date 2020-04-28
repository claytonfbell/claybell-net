import { red } from "@material-ui/core/colors"
import { createMuiTheme } from "@material-ui/core/styles"

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#25aae0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f8cf47",
    },
    text: {
      primary: "#2f2f2f",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#edebeb",
    },
  },
})

export default theme
