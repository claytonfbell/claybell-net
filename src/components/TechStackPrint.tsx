import { Box, Grid, Typography, useTheme } from "@mui/material"
import html2canvas from "html2canvas"
import { useStoredState } from "material-ui-pack"
import React from "react"
import { useTimeout } from "react-use"
import { technologies, TechnologyGroup } from "../technologies"
import Spacer from "./Spacer"
import TechItemPrint from "./TechItemPrint"

export default function TechStackPrint() {
  const theme = useTheme()
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
    <Box
      sx={{
        position: "absolute",
        top: -1000,
        left: -2000,
      }}
    >
      <div ref={myRef}>
        <Box
          sx={{
            backgroundColor: "#eee",
            marginBottom: theme.spacing(3),
            padding: 24,
            borderRadius: 5,
            width: 1250,
          }}
        >
          <Grid container spacing={1}>
            {groups.map(group => (
              <React.Fragment key={group}>
                <Grid item xs={12}>
                  <Typography
                    component="h2"
                    sx={{
                      fontSize: 18,
                      marginBottom: theme.spacing(1),
                    }}
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
    </Box>
  )
}
