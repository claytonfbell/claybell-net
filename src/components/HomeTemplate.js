import React from "react"
import LayoutBase from "./LayoutBase"

export default function HomeTemplate({ children }) {
  return (
    <LayoutBase>
      <main>{children}</main>
    </LayoutBase>
  )
}
