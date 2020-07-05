import Avatar from "@material-ui/core/Avatar"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import makeStyles from "@material-ui/styles/makeStyles"
import Button from "material-ui-bootstrap/dist/Button"
import { useDarkMode } from "material-ui-pack/dist/DarkModeProvider"
import React from "react"
import Gravatar from "react-gravatar"

const useStyles = makeStyles({
  list: {
    minWidth: 300,
  },
  fullList: {
    width: "auto",
  },
})

export default function Contact() {
  const classes = useStyles()
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
    <div
      className={classes.list}
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
    </div>
  )

  return (
    <div>
      <Button
        size="large"
        variant="outlined"
        color="primary"
        onClick={toggleDrawer("left", true)}
      >
        Contact Info
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  )
}
