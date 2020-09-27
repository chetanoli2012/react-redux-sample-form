import React from 'react'
import { Card, CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Tooltip } from '@material-ui/core'
import { InfoRounded } from '@material-ui/icons'

function InputParams() {
  return (
    <Card className="card">
      <CardHeader title="Input Params" className="card--header"></CardHeader>
      <CardContent className="card--body">
        <form className="form--input-params" noValidate autoComplete="off">
          <FormControl fullWidth={true} margin="dense" className="form--wrapper">
            <TextField label="Index of Label Column" className="field--input" />
            <Tooltip title="Index of Label Column" aria-label="info" className="tool--tip">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Automatic Cat. Column Flag</FormLabel>
            <div className = 'mini--wrapper'>
              <RadioGroup row aria-label="auto-cat-column" name="autoCatColumn" className="field--input">
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
              </RadioGroup>
              <Tooltip title="Info" aria-label="info">
                <InfoRounded></InfoRounded>
              </Tooltip>
            </div>
          </FormControl>
          <FormControl fullWidth={true} margin="dense" className="form--wrapper">
            <TextField label="Categorical Columns" className="field--input" />
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  )
}

export default InputParams
