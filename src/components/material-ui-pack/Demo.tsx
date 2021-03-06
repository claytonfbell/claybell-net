import { Grid } from "@material-ui/core"
import {
  DarkModeToggle,
  Form,
  SelectRegion,
  SubmitButton,
  TextField,
} from "material-ui-pack"
import React from "react"
import Spacer from "../Spacer"

export default function Demo() {
  const [state, setState] = React.useState({
    firstName: "",
    phone: "",
    state: "OR",
  })
  function handleSubmit() {
    alert(`It worked! ${JSON.stringify(state)}`)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Form
          onSubmit={handleSubmit}
          margin="normal"
          state={state}
          setState={setState}
        >
          <DarkModeToggle />
          <TextField name="firstName" />
          <TextField name="phone" phone />
          <SelectRegion country="US" countryIsoType="isoAlpha2" name="state" />
          <Spacer />
          <SubmitButton>Submit</SubmitButton>
        </Form>
      </Grid>
    </Grid>
  )
}
