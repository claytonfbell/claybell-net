import { Box, Grid, makeStyles, Typography } from "@material-ui/core"
import html2canvas from "html2canvas"
import { useStoredState } from "material-ui-pack"
import React from "react"
import { useTimeout } from "react-use"
import { technologies, TechnologyGroup } from "../technologies"
import Spacer from "./Spacer"
import TechItemPrint from "./TechItemPrint"

const useStyles = makeStyles(theme => ({
  container: {
    position: "absolute",
    top: -1000,
  },
  root: {
    backgroundColor: "#eee",
    marginBottom: theme.spacing(3),
    padding: 24,
    borderRadius: 5,
    width: 1250,
  },
  title: {
    fontSize: 18,
    marginBottom: theme.spacing(1),
  },
}))

export default function TechStackPrint() {
  const classes = useStyles()
  const groups: TechnologyGroup[] = ["Front-End", "Backend", "DevOps"]

  const isReady = useTimeout(1000)
  React.useEffect(() => {
    if (isReady) {
      handleCapture()
    }
  }, [isReady])

  const myRef = React.useRef<HTMLDivElement>()
  const [imageData, setImageData] = useStoredState<null | string>(
    "capture",
    null
  )
  function handleCapture() {
    html2canvas(myRef.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas")
      let croppedCanvasContext = croppedCanvas.getContext("2d")

      const cropWidth = myRef.current.clientWidth
      const cropHeight = myRef.current.clientHeight
      croppedCanvas.width = cropWidth
      croppedCanvas.height = cropHeight

      croppedCanvasContext.drawImage(
        canvas,
        0,
        0,
        cropWidth,
        cropHeight,
        0,
        0,
        cropWidth,
        cropHeight
      )
      setImageData(croppedCanvas.toDataURL())
    })
  }

  return (
    <div className={classes.container}>
      <div ref={myRef}>
        <Box className={classes.root}>
          <Grid container spacing={1}>
            {groups.map(group => (
              <React.Fragment key={group}>
                <Grid item xs={12}>
                  <Typography
                    component="h2"
                    className={classes.title}
                    color="primary"
                  >
                    {group}
                  </Typography>
                  <Grid container>
                    {technologies
                      .filter(x => x.group === group)
                      .map(t => (
                        <TechItemPrint technology={t} />
                      ))}
                  </Grid>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </div>
      <Spacer />
      {imageData !== null && <img src={imageData} />}
    </div>
  )
}
