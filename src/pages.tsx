import React from "react"
import cbFiles from "./images/claybell-net/files.png"
import mnwAutomation from "./images/mnw-automation/mnw-dock.png"
import { TechnologyName } from "./technologies"

export type RoutePath = "/" | "/mnw-automation" | "/claybell-net"

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description?: string
  image?: string
  technologies?: TechnologyName[]
}

export const pages: Page[] = [
  {
    route: "/mnw-automation",
    displayOnHome: true,
    title: "New Electron App",
    image: mnwAutomation,
    description: `An Electron side-project application for Montessori Northwest.`,
    technologies: ["Electron", "React", "TypeScript", "Material UI"],
  },
  {
    route: "/claybell-net",
    displayOnHome: true,
    title: "claybell.net",
    image: cbFiles,
    description: `This blog / portfolio site.`,
    technologies: ["Gatsby", "React", "TypeScript", "Material UI", "Netlify"],
  },
]

export default () => <></>
