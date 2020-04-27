import { CssBaseline, ThemeProvider } from "@material-ui/core"
import React from "react"
import theme from "../theme"

export default function LayoutBase({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
