import { Grid } from "@material-ui/core"
import DarkModeToggle from "material-ui-pack/dist/DarkModeToggle"
import DatePicker from "material-ui-pack/dist/DatePicker"
import Form from "material-ui-pack/dist/Form"
import SelectRegion from "material-ui-pack/dist/SelectRegion"
import SubmitButton from "material-ui-pack/dist/SubmitButton"
import TextField from "material-ui-pack/dist/TextField"
import React from "react"

export default function Demo() {
  const [state, setState] = React.useState({
    firstName: "",
    birthday: null,
    state: "OR",
  })
  function handleSubmit() {
    alert(`It worked! ${JSON.stringify(state)}`)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Form
          onSubmit={handleSubmit}
          margin="normal"
          state={state}
          setState={setState}
        >
          <TextField name="firstName" />
          <DatePicker name="birthday" />
          <SelectRegion country="US" countryIsoType="isoAlpha2" name="state" />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Grid>
      <Grid item xs={12} sm={6}>
        <DarkModeToggle />
      </Grid>
    </Grid>
  )
}
