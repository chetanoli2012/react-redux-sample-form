import React from 'react'
import { Card, CardHeader, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Tooltip } from '@material-ui/core'
import { InfoRounded } from '@material-ui/icons'
import { Formik } from 'formik'

function InputParams() {


  const dispatchToTheStore = (values) => {
    console.log('Here we go!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!', values);
  }

  return (
    <Card className="card">
      <CardHeader title="Input Params" className="card--header"></CardHeader>
      <CardContent className="card--body">
        <Formik
          initialValues={{
            inputParams: {
              labelColumn: undefined,
              autoCatColumn: undefined,
              categoricalColumns: undefined
            }
          }}
        >
          {
            ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, setFieldValue }) =>
              (
                <>
                  {console.log(values)}
                  <FormControl fullWidth={true} margin="dense" className="form--wrapper">
                    <TextField label="Index of Label Column" className="field--input" name="inputParams.labelColumn"
                      value={values.inputParams.labelColumn} onChange={handleChange}
                      onBlur={() => {
                        dispatchToTheStore(values);
                      }}
                    />
                    <Tooltip title="Index of Label Column" aria-label="info" className="tool--tip">
                      <InfoRounded></InfoRounded>
                    </Tooltip>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense">
                    <FormLabel className="text--left">Automatic Cat. Column Flag</FormLabel>
                    <div className='mini--wrapper'>
                      <RadioGroup row aria-label="auto-cat-column" className="field--input"
                        name="inputParams.autoCatColumn" onChange={handleChange}
                        onBlur={() => {
                          dispatchToTheStore(values);
                        }}
                      >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                      </RadioGroup>
                      <Tooltip title="Automatic Cat. Column Flag" aria-label="info">
                        <InfoRounded></InfoRounded>
                      </Tooltip>
                    </div>
                  </FormControl>
                  <FormControl fullWidth={true} margin="dense" className="form--wrapper">
                    <TextField label="Categorical Columns" className="field--input"
                      name="inputParams.categoricalColumns" onChange={handleChange}
                      onBlur={() => {
                        dispatchToTheStore(values);
                      }}
                      value={values.inputParams.categoricalColumns}
                    />
                    <Tooltip title="Categorical Columns" aria-label="info">
                      <InfoRounded></InfoRounded>
                    </Tooltip>
                  </FormControl>
                </>
              )
          }
        </Formik>
      </CardContent>
    </Card>
  )
}

export default InputParams
