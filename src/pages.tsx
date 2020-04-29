import cbFiles from "./images/claybell-net/files.png"
import itScan from "./images/interactive-ticketing/scan.png"
import itLogo from "./images/it-logo.png"
import npm from "./images/material-ui-pack/npm.png"
import mnwAutomation from "./images/mnw-automation/mnw-dock.png"
import tututix from "./images/tutu/iphone.png"
import { TechnologyName } from "./technologies"

export type RoutePath =
  | "/"
  | "/mnw-automation"
  | "/this-website"
  | "/interactiveticketing"
  | "/scan-tickets"
  | "/tututix"
  | "/material-ui-pack"

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description?: string
  image?: string
  stack?: TechnologyName[]
  isPrivate?: boolean
}

export const pages: Page[] = [
  {
    route: "/material-ui-pack",
    displayOnHome: true,
    title: "New NPM Package",
    image: npm,
    description: `An opinionated api for form state, dark-mode and more.`,
    stack: ["npm", "Travis CI", "React", "TypeScript", "Material UI"],
  },
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
    route: "/scan-tickets",
    displayOnHome: true,
    title: "Ticket Scanning Apps",
    image: itScan,
    description: `These products were developeed several years ago for our Interactive Ticketing clients to scan tickets at their venues.`,
    stack: ["PHP", "MySQL", "iOS - Objective-C", ".NET C#", "SQLite3"],
  },
  {
    isPrivate: true,
    route: "/tututix",
    displayOnHome: true,
    title: "TutuTix Dashboard",
    image: tututix,
    description: `Helping build a new dashboard manager for the TutuTix platform.`,
    stack: ["Java", "Oracle DB", "AWS", "Jenkins CI", "React", "TypeScript"],
  },
  {
    route: "/this-website",
    displayOnHome: true,
    title: "This Website",
    image: cbFiles,
    description: `This blog / portfolio site.`,
    stack: ["Gatsby", "React", "mdx", "TypeScript", "Material UI", "Netlify"],
  },
]
