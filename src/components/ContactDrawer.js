import Button from "@material-ui/core/Button"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import MailIcon from "@material-ui/icons/Mail"
import PhoneIcon from "@material-ui/icons/Phone"
import React from "react"

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
            I have worked remotely for many years
            <br /> and reside in Portland Oregon home.
          </ListItemText>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div>
      <Button variant="outlined" onClick={toggleDrawer("left", true)}>
        Contact Info
      </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  )
}
