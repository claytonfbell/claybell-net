import React from "react"
import cbFiles from "./images/claybell-net/files.png"
import itLogo from "./images/interactive-ticketing/it-logo.png"
import mnwAutomation from "./images/mnw-automation/mnw-dock.jp2"
import { TechnologyName } from "./technologies"

export type RoutePath =
  | "/"
  | "/mnw-automation"
  | "/claybell-net"
  | "/interactiveticketing"

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description?: string
  image?: string
  stack?: TechnologyName[]
}

export const pages: Page[] = [
  {
    route: "/mnw-automation",
    displayOnHome: true,
    title: "New Electron App",
    image: mnwAutomation,
    description: `An Electron side-project application for Montessori Northwest.`,
    stack: ["Electron", "React", "TypeScript", "Material UI"],
  },
  {
    route: "/interactiveticketing",
    displayOnHome: true,
    title: "Interactive Ticketing",
    image: itLogo,
    description: `The primary software engineer that developed and maintained the platform from its founding.`,
    stack: ["PHP", "MySQL", "Angular", "TypeScript"],
  },
  {
    route: "/claybell-net",
    displayOnHome: true,
    title: "claybell.net",
    image: cbFiles,
    description: `This blog / portfolio site.`,
    stack: ["Gatsby", "React", "mdx", "TypeScript", "Material UI", "Netlify"],
  },
]

export default () => <></>
