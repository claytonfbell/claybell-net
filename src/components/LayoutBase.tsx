import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { DarkModeProvider, useDarkMode } from "material-ui-pack"
import React from "react"
import { ShowPrivateProvider } from "./ShowPrivateProvider"

interface Props {
  children: React.ReactNode
}

function ThemedContent({ children }: Props) {
  const { createMuiThemeWithDarkMode, darkMode } = useDarkMode()
  return (
    <ThemeProvider
      theme={createMuiThemeWithDarkMode({
        palette: {
          primary: {
            main: "#25aae0",
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#e0be25",
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
      <ShowPrivateProvider>
        <ThemedContent {...props} />
      </ShowPrivateProvider>
    </DarkModeProvider>
  )
}
