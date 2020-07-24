import { TechnologyName } from "./technologies"

export type RoutePath =
  | "/"
  | "/mnw-automation"
  | "/this-website"
  | "/interactiveticketing"
  | "/scan-tickets"
  | "/tututix"
  | "/material-ui-pack"
  | "/material-ui-bootstrap"
  | "/resume"
  | "/keyboards"
  | "/turnstile"
  | "/dev-toolkit"
  | "/electoral-live"

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
    isPrivate: false,
    route: "/electoral-live",
    displayOnHome: true,
    title: "Electoral Vote Visualizer",
    description: "A website that scrapes polling averages daily.",
    image: "electoral-live/preview.png",
    stack: ["Material UI", "React", "TypeScript", "Netlify"],
  },
  {
    isPrivate: true,
    route: "/dev-toolkit",
    displayOnHome: true,
    title: "Developer Toolkit",
    description:
      "An internal documentation and set of tools to help co-workers.",
    image: "dev-toolkit/dev-toolkit-screen.png",
    stack: ["Electron", "Material UI", "React", "TypeScript", "mdx", "npm"],
  },
  {
    route: "/material-ui-bootstrap",
    displayOnHome: true,
    title: "NPM material-ui-bootstrap",
    image: "material-ui-bootstrap/screen.jpg",
    description: `A light-weight set of bootstrap style components with material-ui.`,
    stack: ["npm", "Travis CI", "React", "TypeScript", "Material UI"],
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
    title: "NPM material-ui-pack",
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
    stack: ["PHP", "MySQL", "Objective-C", ".NET C#", "SQLite3"],
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
    image: "keyboards/orange2.jpg",
    stack: [],
  },
]
