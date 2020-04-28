import React from "react"
import AngularIcon from "./icons/AngularIcon"
import ElectronIcon from "./icons/ElectronIcon"
import GatsbyIcon from "./icons/GatsbyIcon"
import MaterialUIIcon from "./icons/MaterialUIIcon"
import MDXIcon from "./icons/MDXIcon"
import MySQLIcon from "./icons/MySQLIcon"
import NetlifyIcon from "./icons/NetlifyIcon"
import PHPIcon from "./icons/PHPIcon"
import ReactIcon from "./icons/ReactIcon"
import TypeScriptIcon from "./icons/TypeScriptIcon"

export type TechnologyName =
  | "TypeScript"
  | "Electron"
  | "Material UI"
  | "React"
  | "mdx"
  | "Gatsby"
  | "Netlify"
  | "Angular"
  | "PHP"
  | "MySQL"

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
    name: "mdx",
    icon: <MDXIcon />,
    url: "https://mdxjs.com",
  },
  {
    name: "Netlify",
    icon: <NetlifyIcon />,
    url: "https://www.netlify.com/",
  },
  { name: "Angular", icon: <AngularIcon />, url: "https://angular.io" },
  { name: "PHP", icon: <PHPIcon />, url: "https://php.net" },
  { name: "MySQL", icon: <MySQLIcon />, url: "https://www.mysql.com" },
]
