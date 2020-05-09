import Box from "@material-ui/core/Box"
import React from "react"

export default function Spacer({
  size = "medium",
}: {
  size?: "medium" | "large"
}) {
  return <Box style={{ height: size === "medium" ? 12 : 24 }} />
}
