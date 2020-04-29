import { CssBaseline, ThemeProvider } from "@material-ui/core"
import {
  DarkModeProvider,
  useDarkMode,
} from "material-ui-pack/dist/DarkModeProvider"
import React from "react"

interface Props {
  children: React.ReactNode
}

function ThemedContent({ children }: Props) {
  const { createMuiThemeWithDarkMode } = useDarkMode()
  return (
    <ThemeProvider
      theme={createMuiThemeWithDarkMode({
        palette: {
          primary: {
            main: "#25aae0",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#f8cf47",
          },
        },
      })}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

export default function LayoutBase(props: Props) {
  return (
    <DarkModeProvider>
      <ThemedContent {...props} />
    </DarkModeProvider>
  )
}
