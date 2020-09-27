import React from 'react'
import { Card, CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, Tooltip } from '@material-ui/core'
import { InfoRounded } from '@material-ui/icons';
import { Formik } from 'formik'

function AlgoParams() {

  const dispatchToTheStore = (values) => {
    console.log('Here we go!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',values);
  }

  return (
    <Card className="card">
      <CardHeader title="Algo Params" className="card--header"></CardHeader>
      <CardContent className="card--body">
        <Formik
          initialValues={{
            algoParams: {
              hyperParamTuning: undefined,
              kFoldFlag: undefined,
              trainTestRandomSplitType: undefined,
              trainingDataPercentage: undefined,
              testDataPercentage: undefined,
              maxDepthOfTree: undefined,
              maxNumberOfBins: undefined
            }
          }}
        >
          {
            ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) =>
              (
                <>
                  {console.log('values for algoparams', values)}
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">Hyperparameter tuning</FormLabel>
                    <div className='mini--wrapper'>
                      <RadioGroup row aria-label="hyperparameter-tuning" className="field--input"
                        name="algoParams.hyperParamTuning" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">K Fold Flag</FormLabel>
                    <div className='mini--wrapper'>
                      <RadioGroup row aria-label="k-fold-flag" className="field--input"
                        name="algoParams.kFoldFlag" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense" className="form--wrapper">
                    <InputLabel id="train-test-split-type" className="text--left">Train Test Random Split Type</InputLabel>
                    <Select labelId="train-test-split-type" className="text--left field--input"
                      name="algoParams.trainTestRandomSplitType" onChange={handleChange}
                      onBlur={() => {
                        dispatchToTheStore(values);
                      }}
                    >
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
                    <div className='mini--wrapper'>
                      <Input type="number" inputProps={{ step: "0.1" }} className="field--input"
                        name="algoParams.trainingDataPercentage" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      />
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">Test Data Percentage</FormLabel>
                    <div className='mini--wrapper'>
                      <Input type="number" inputProps={{ step: "0.1" }} className="field--input"
                        name="algoParams.testDataPercentage" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      />
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">Maximum Depth of Tree</FormLabel>
                    <div className='mini--wrapper'>
                      <Input type="number" className="field--input"
                        name="algoParams.maxDepthOfTree" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }} />
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">Maximum Number of Bins</FormLabel>
                    <div className="mini--wrapper">
                      <Input type="number" className="field--input"
                        name="algoParams.maxNumberOfBins" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      />
                      <Tooltip title="Info" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                </>
              )
          }
        </Formik>
      </CardContent>
    </Card>
  )
}

export default AlgoParams
