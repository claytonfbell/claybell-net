import React from "react"
import AngularIcon from "./icons/AngularIcon"
import AWSIcon from "./icons/AWSIcon"
import BootstrapIcon from "./icons/BootstrapIcon"
import CSharpIcon from "./icons/CSharpIcon"
import ElectronIcon from "./icons/ElectronIcon"
import GatsbyIcon from "./icons/GatsbyIcon"
import JavaIcon from "./icons/JavaIcon"
import JenkinsIcon from "./icons/JenkinsIcon"
import MaterialUIIcon from "./icons/MaterialUIIcon"
import MDXIcon from "./icons/MDXIcon"
import MySQLIcon from "./icons/MySQLIcon"
import NetlifyIcon from "./icons/NetlifyIcon"
import NPMIcon from "./icons/NPMIcon"
import ObjectiveCIcon from "./icons/ObjectiveCIcon"
import OracleIcon from "./icons/OracleIcon"
import PHPIcon from "./icons/PHPIcon"
import ReactIcon from "./icons/ReactIcon"
import SQLite3Icon from "./icons/SQLite3Icon"
import TravisIcon from "./icons/TravisIcon"
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
  | "iOS - Objective-C"
  | ".NET C#"
  | "SQLite3"
  | "Java"
  | "Oracle DB"
  | "AWS"
  | "npm"
  | "Travis CI"
  | "Jenkins CI"
  | "Bootstrap"

export type TechnologyGroup = "Front-End" | "Backend" | "DevOps"

export interface Technology {
  name: TechnologyName
  icon: React.ReactNode
  url: string
  group: TechnologyGroup
  description?: string
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    url: "https://www.reactjs.org",
    group: "Front-End",
    description: `I began learning and using React in early 2017. It is currently my favorite tool I reach for, whether I'm working on web, desktop, or mobile!

I attended [Reactathon 2019](https://www.reactjsvideos.com/conference/reactathon-2019) and [React Summit Amsterdam 2020](https://reactsummit.com) online, I hope to attend its rescheduling this fall if it is safe to travel. 
    `,
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    url: "https://www.typescriptlang.org/",
    group: "Front-End",
    description: `In 2016 we started using TypeScript after attending [NG-CONF 2016](https://2016.ng-conf.org) which was a big part of the Angular 2 release. It certainly makes maintaining and refactoring many different projects easier and with confidence.`,
  },
  {
    name: "Electron",
    icon: <ElectronIcon />,
    url: "https://www.electronjs.org",
    group: "Front-End",
    description: `I've recently explored and learned how to build Electron applications. I really love it. I did not realize how may apps I use daily that use this framework.`,
  },
  {
    name: "Material UI",
    icon: <MaterialUIIcon />,
    url: "https://material-ui.com",
    group: "Front-End",
    description: `I'm a fan of this component library. It has further increased my productivity and improve accessiblity in my current projects.`,
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    url: "https://getbootstrap.com",
    group: "Front-End",
    description: `I'm not sure I would reach for this on a brand new project, but I still work on and maintain dozens of applications daily that use amazing component / css library. `,
  },
  {
    name: "Gatsby",
    icon: <GatsbyIcon />,
    url: "https://www.gatsbyjs.org",
    group: "Front-End",
    description: `I took the opportunity to finally use the much touted Gatsby framework while producing this website. I think it deserves the attention is has received lately and I will probably use it again if a project's requirements line up with it.`,
  },

  {
    name: "mdx",
    icon: <MDXIcon />,
    url: "https://mdxjs.com",
    group: "Front-End",
    description: `I like to incorporate \`.mdx\` components and pages in React. This website and an internal Electron application I created for documentation are using this terrific solution.`,
  },

  {
    name: "Angular",
    icon: <AngularIcon />,
    url: "https://angular.io",
    group: "Front-End",
    description: `The first single-page-application I ever built was with jQuery and Backbone.js, but every front-end single page application I worked on from about 2013 to 2017 was created with Angular JS, and the majority of Interactive Ticketing is running on it.`,
  },
  { name: "PHP", icon: <PHPIcon />, url: "https://php.net", group: "Backend" },
  {
    name: "MySQL",
    icon: <MySQLIcon />,
    url: "https://www.mysql.com",
    group: "Backend",
  },
  {
    name: "iOS - Objective-C",
    icon: <ObjectiveCIcon />,
    url:
      "https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html",
    group: "Front-End",
  },
  {
    name: ".NET C#",
    icon: <CSharpIcon />,
    url: "https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework",
    group: "Front-End",
  },
  {
    name: "SQLite3",
    icon: <SQLite3Icon />,
    url: "https://www.sqlite.org",
    group: "Front-End",
  },
  {
    name: "Java",
    icon: <JavaIcon />,
    url: "https://www.java.com",
    group: "Backend",
  },
  {
    name: "Oracle DB",
    icon: <OracleIcon />,
    url: "https://www.oracle.com/database",
    group: "Backend",
  },
  {
    name: "AWS",
    icon: <AWSIcon />,
    url: "https://aws.amazon.com",
    group: "DevOps",
  },
  {
    name: "npm",
    icon: <NPMIcon />,
    url: "https://www.npmjs.com",
    group: "Front-End",
  },
  {
    name: "Travis CI",
    icon: <TravisIcon />,
    url: "https://travis-ci.org",
    group: "DevOps",
  },
  {
    name: "Jenkins CI",
    icon: <JenkinsIcon />,
    url: "https://www.jenkins.io",
    group: "DevOps",
  },

  {
    name: "Netlify",
    icon: <NetlifyIcon />,
    url: "https://www.netlify.com/",
    group: "DevOps",
  },
]
