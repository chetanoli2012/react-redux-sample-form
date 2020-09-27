import React from 'react'
import { Card, CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Tooltip } from '@material-ui/core'
import { InfoRounded } from '@material-ui/icons';

function AlgoParams() {
  return (
    <Card className="card">
      <CardHeader title="Algo Params" className="card--header"></CardHeader>
      <CardContent className="card--body">
        <form className="form--algo-params" noValidate autoComplete="off">
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Hyperparameter tuning</FormLabel>
            <RadioGroup row aria-label="hyperparameter-tuning" name="hyperparameterTuning" className="field--input">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">K Fold Flag</FormLabel>
            <RadioGroup row aria-label="k-fold-flag" name="kFoldFlag" className="field--input">
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense" className = "form--wrapper">
            <InputLabel id="train-test-split-type" className="text--left">Train Test Random Split Type</InputLabel>
            <Select labelId="train-test-split-type" className="text--left field--input">
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"trainTestRandomSplitType0"}>Train Test Random Split Type 0</MenuItem>
            </Select>
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Training Data Percentage</FormLabel>
            <Input type="number" inputProps={{ step: "0.1" }} className="field--input" />
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Test Data Percentage</FormLabel>
            <Input type="number" inputProps={{ step: "0.1" }} className="field--input" />
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Maximum Depth of Tree</FormLabel>
            <Input type="number" className="field--input" />
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
          <FormControl fullWidth={true} margin="dense">
            <FormLabel className="text--left">Maximum Number of Bins</FormLabel>
            <Input type="number" className="field--input" />
            <Tooltip title="Info" aria-label="info">
              <InfoRounded></InfoRounded>
            </Tooltip>
          </FormControl>
        </form>
      </CardContent>
    </Card>
  )
}

export default AlgoParams
