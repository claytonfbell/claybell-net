import GitHubButton from "@mui/icons-material/GitHub"
import MailIcon from "@mui/icons-material/Mail"
import PhoneIcon from "@mui/icons-material/Phone"
import TwitterIcon from "@mui/icons-material/Twitter"
import { Box, Grid, Hidden, IconButton } from "@mui/material"
import Avatar from "@mui/material/Avatar"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemAvatar from "@mui/material/ListItemAvatar"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Button } from "material-ui-bootstrap"
import { useDarkMode } from "material-ui-pack"
import React from "react"
import Gravatar from "react-gravatar"

export default function Contact() {
  const [state, setState] = React.useState({
    left: false,
  })

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setState({ ...state, [side]: open })
  }

  const { darkMode } = useDarkMode()

  const sideList = side => (
    <Box
      sx={{
        minWidth: 300,
      }}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <Gravatar email="claytonfbell@gmail.com" />
              </Avatar>
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary={`Clayton Bell`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PhoneIcon />
          </ListItemIcon>
          <ListItemText primary={`(971) 285-5666`} />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MailIcon />
          </ListItemIcon>
          <ListItemText primary={`claytonfbell@gmail.com`} />
        </ListItem>
        <ListItem>
          <ListItemText>
            I have worked remotely for many
            <br />
            years from Portland Oregon.
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <>
      <Grid container spacing={1} wrap="nowrap">
        <Grid item>
          <Button
            size="large"
            variant="outlined"
            color="primary"
            onClick={toggleDrawer("left", true)}
          >
            Contact<Hidden smDown> Info</Hidden>
          </Button>
        </Grid>
        <Grid item>
          <IconButton color="primary" href="https://github.com/claytonfbell">
            <GitHubButton />
          </IconButton>
          <IconButton color="primary" href="https://twitter.com/claytonfbell">
            <TwitterIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </>
  )
}
