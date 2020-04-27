import React from "react"
import mnwAutomation from "./images/mnw-automation/mnw-dock.png"

export type RoutePath = "/" | "/mnw-automation"

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description?: string
  image?: string
}

export const pages: Page[] = [
  {
    route: "/",
    title: "Home",
  },
  {
    route: "/mnw-automation",
    displayOnHome: true,
    title: "New Electron App",
    image: mnwAutomation,
    description: `An Electron side-project application for Montessori Northwest.`,
  },
]

export default () => <></>
