import MuiLink from "@material-ui/core/Link"
import { Link as GatsbyLink } from "gatsby"
import React from "react"

const Link = React.forwardRef(function Link(props, ref) {
  return <MuiLink component={GatsbyLink} ref={ref} {...props} />
})

export default Link
