import Box from "@mui/material/Box"
import React from "react"

export default function Spacer({
  size = "medium",
}: {
  size?: "medium" | "large"
}) {
  return <Box style={{ height: size === "medium" ? 12 : 24 }} />
}
