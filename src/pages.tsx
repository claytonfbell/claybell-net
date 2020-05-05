import { TechnologyName } from "./technologies"

export type RoutePath =
  | "/"
  | "/mnw-automation"
  | "/this-website"
  | "/interactiveticketing"
  | "/scan-tickets"
  | "/tututix"
  | "/material-ui-pack"
  | "/resume"
  | "/keyboards"
  | "/turnstile"

interface Page {
  route: RoutePath
  title: string
  displayOnHome?: boolean
  description: string
  image: string
  stack: TechnologyName[]
  isPrivate?: boolean
}

export const pages: Page[] = [
  {
    isPrivate: true,
    route: "/resume",
    displayOnHome: true,
    title: "My Resumé",
    description: "My career path.",
    image: "resume/coffee.jpeg",
    stack: [],
  },
  {
    route: "/turnstile",
    displayOnHome: true,
    title: "The Turnstile Project",
    image: "turnstile/turnstiles.jpg",
    description: `An interesting project accomplished on a very short timeline.`,
    stack: ["PHP", "MySQL", ".NET C#", "SQLite3"],
  },
  {
    route: "/material-ui-pack",
    displayOnHome: true,
    title: "New NPM Package",
    image: "material-ui-pack/npm2.png",
    description: `An opinionated api for form state, dark-mode and more.`,
    stack: ["npm", "Travis CI", "React", "TypeScript", "Material UI"],
  },
  {
    route: "/mnw-automation",
    displayOnHome: true,
    title: "New Electron App",
    image: "mnw-automation/mnw-dock.png",
    description: `An Electron side-project application for Montessori Northwest.`,
    stack: ["Electron", "React", "TypeScript", "Material UI"],
  },
  {
    route: "/interactiveticketing",
    displayOnHome: true,
    title: "Interactive Ticketing",
    image: "it-logo.png",
    description: `The primary software engineer that developed and maintained the platform from its founding.`,
    stack: ["PHP", "MySQL", "Angular", "TypeScript", "Bootstrap"],
  },
  {
    route: "/scan-tickets",
    displayOnHome: true,
    title: "Ticket Scanning Apps",
    image: "interactive-ticketing/scan.png",
    description: `These products were developeed several years ago for our Interactive Ticketing clients to scan tickets at their venues.`,
    stack: ["PHP", "MySQL", "iOS - Objective-C", ".NET C#", "SQLite3"],
  },
  {
    isPrivate: true,
    route: "/tututix",
    displayOnHome: true,
    title: "TutuTix Dashboard",
    image: "tutu/iphone.png",
    description: `Helping build a new dashboard manager for the TutuTix platform.`,
    stack: [
      "Java",
      "Oracle DB",
      "AWS",
      "Jenkins CI",
      "React",
      "TypeScript",
      "Material UI",
    ],
  },
  {
    route: "/this-website",
    displayOnHome: true,
    title: "This Website",
    image: "claybell-net/files.png",
    description: `This blog / portfolio site.`,
    stack: ["Gatsby", "React", "mdx", "TypeScript", "Material UI", "Netlify"],
  },
  {
    isPrivate: false,
    route: "/keyboards",
    displayOnHome: true,
    title: "Keyboards",
    description: "Keyboards are fun.",
    image: "keyboards/wood-open.jpeg",
    stack: [],
  },
]
