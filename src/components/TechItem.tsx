import Box from "@material-ui/core/Box"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import { Theme } from "@material-ui/core/styles/createMuiTheme"
import makeStyles from "@material-ui/core/styles/makeStyles"
import withStyles from "@material-ui/core/styles/withStyles"
import Tooltip from "@material-ui/core/Tooltip"
import { Button } from "material-ui-bootstrap"
import { useHandleState } from "material-ui-pack"
import React from "react"
import ReactMarkdown from "react-markdown"
import { Technology } from "../technologies"
import Spacer from "./Spacer"

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
  const classes = makeStyles((theme: Theme) => ({
    root: {
      "& h1": {
        fontSize: 18,
      },
      "& a": {
        color: theme.palette.primary.main,
      },
    },
  }))()

  const [open, handleOpen] = useHandleState<boolean>(false)
  return (
    <>
      <HtmlTooltip
        interactive
        title={<TechContent technology={t} />}
        placement={props.placement}
        arrow
      >
        <IconButton onClick={handleOpen(true)} aria-label={t.name}>
          {t.icon}
        </IconButton>
      </HtmlTooltip>
      <Dialog open={open} onClose={handleOpen(false)} fullWidth maxWidth="xs">
        <DialogContent>
          <Box className={classes.root}>
            <TechContent technology={t} />
          </Box>
          <Spacer size="large" />
          <Button
            fullWidth
            onClick={handleOpen(false)}
            variant="outlined"
            color="primary"
          >
            Close
          </Button>
          <Spacer />
        </DialogContent>
      </Dialog>
    </>
  )
}

function TechContent({ technology }: { technology: Technology }) {
  return (
    <>
      <Grid container spacing={1} alignItems="center">
        <Grid item>{technology.icon}</Grid>
        <Grid item>
          <h1>{technology.name}</h1>
        </Grid>
      </Grid>
      <p>
        <ReactMarkdown
          linkTarget="_blank"
          source={
            technology.description
              ? technology.description
              : `_Oops! I've been busy, content coming soon..._`
          }
        />
      </p>
      {technology.url && (
        <a href={technology.url} target="_blank">
          {technology.url}
        </a>
      )}
    </>
  )
}
