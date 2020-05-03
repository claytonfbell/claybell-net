import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import Switch from "@material-ui/core/Switch"
import React from "react"
import { useTimeout } from "react-use"
import { useShowPrivate } from "../../components/ShowPrivateProvider"

export default function SwitchLabels() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowPrivate(event.target.checked ? "yes" : "no")
  }

  const { showPrivate, setShowPrivate } = useShowPrivate()
  const go = useTimeout(100)
  React.useEffect(() => {
    setShowPrivate("yes")
  }, [go])

  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Switch checked={showPrivate === "yes"} onChange={handleChange} />
        }
        label="Show Resume Content on Website"
      />
    </FormGroup>
  )
}
