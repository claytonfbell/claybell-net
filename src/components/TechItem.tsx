import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import withStyles from "@material-ui/core/styles/withStyles"
import Tooltip from "@material-ui/core/Tooltip"
import React from "react"
import ReactMarkdown from "react-markdown"
import { Technology } from "../technologies"

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: "#222222",
    color: "white",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(14),
    minHeight: 64,
    minWidth: 250,
    padding: 18,
    "& h1": {
      fontSize: 18,
    },
    "& a": {
      color: theme.palette.primary.main,
    },
  },
  arrow: {
    color: "#222222",
    fontSize: theme.typography.pxToRem(18),
  },
}))(Tooltip)

interface Props {
  technology: Technology
  placement?:
    | "bottom"
    | "left"
    | "right"
    | "top"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start"
}
export default function TechItem(props: Props) {
  const t = props.technology
  return (
    <>
      <HtmlTooltip
        interactive
        title={
          <>
            <Grid container spacing={1} alignItems="center">
              <Grid item>{t.icon}</Grid>
              <Grid item>
                <h1>{t.name}</h1>
              </Grid>
            </Grid>
            <p>
              <ReactMarkdown
                linkTarget="_blank"
                source={
                  t.description
                    ? t.description
                    : `_Oops! I've been busy, content coming soon..._`
                }
              />
            </p>
            {t.url && (
              <a href={t.url} target="_blank">
                {t.url}
              </a>
            )}
          </>
        }
        placement={props.placement}
        arrow
      >
        <IconButton aria-label={t.name}>{t.icon}</IconButton>
      </HtmlTooltip>
    </>
  )
}
