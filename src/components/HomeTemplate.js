import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/styles"
import React from "react"
import theme from "../theme"

function ThemeIt({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}

export default function HomeTemplate({ children }) {
  return (
    <ThemeIt>
      <React.Fragment>
        <CssBaseline />
        <main>{children}</main>
      </React.Fragment>
    </ThemeIt>
  )
}
