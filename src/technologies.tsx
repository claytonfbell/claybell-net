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
}

export const technologies: Technology[] = [
  {
    name: "React",
    icon: <ReactIcon />,
    url: "https://www.reactjs.org",
    group: "Front-End",
  },
  {
    name: "TypeScript",
    icon: <TypeScriptIcon />,
    url: "https://www.typescriptlang.org/",
    group: "Front-End",
  },
  {
    name: "Electron",
    icon: <ElectronIcon />,
    url: "https://www.electronjs.org",
    group: "Front-End",
  },
  {
    name: "Material UI",
    icon: <MaterialUIIcon />,
    url: "https://material-ui.com",
    group: "Front-End",
  },
  {
    name: "Bootstrap",
    icon: <BootstrapIcon />,
    url: "https://getbootstrap.com",
    group: "Front-End",
  },
  {
    name: "Gatsby",
    icon: <GatsbyIcon />,
    url: "https://www.gatsbyjs.org",
    group: "Front-End",
  },

  {
    name: "mdx",
    icon: <MDXIcon />,
    url: "https://mdxjs.com",
    group: "Front-End",
  },

  {
    name: "Angular",
    icon: <AngularIcon />,
    url: "https://angular.io",
    group: "Front-End",
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
