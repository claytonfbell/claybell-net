import React from "react"
import ElectronIcon from "./icons/ElectronIcon"
import GatsbyIcon from "./icons/GatsbyIcon"
import MaterialUIIcon from "./icons/MaterialUIIcon"
import NetlifyIcon from "./icons/NetlifyIcon"
import ReactIcon from "./icons/ReactIcon"
import TypeScriptIcon from "./icons/TypeScriptIcon"

export type TechnologyName =
  | "TypeScript"
  | "Electron"
  | "Material UI"
  | "React"
  | "Gatsby"
  | "Netlify"

export interface Technology {
  name: TechnologyName
  icon: React.ReactNode
  url: string
}

export const technologies: Technology[] = [
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Electron",
    icon: <ElectronIcon />,
    url: "https://www.electronjs.org",
  },
  {
    name: "Material UI",
    icon: <MaterialUIIcon />,
    url: "https://material-ui.com",
  },
  {
    name: "Gatsby",
    icon: <GatsbyIcon />,
    url: "https://www.gatsbyjs.org",
  },
  {
    name: "React",
    icon: <ReactIcon />,
    url: "https://www.reactjs.org",
  },
  {
    name: "Netlify",
    icon: <NetlifyIcon />,
    url: "https://www.netlify.com/",
  },
]
