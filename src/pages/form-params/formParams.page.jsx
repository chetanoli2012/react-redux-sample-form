import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core';

import InputParams from '../../components/input-params/inputParams'
import AlgoParams from '../../components/algo-params/algoParams'

export class FormParams extends Component {
  static propTypes = {

  }

  render() {
    return (
      <Box className="card-container">
        <Box className="card-wrapper">
          <InputParams></InputParams>
        </Box>
        <Box className="card-wrapper">
          <AlgoParams></AlgoParams>
        </Box>
      </Box>
    )
  }
}

export default FormParams
