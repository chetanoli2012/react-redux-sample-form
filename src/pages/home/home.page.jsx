import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box } from '@material-ui/core';

import FormParams from '../form-params/formParams.page'

const HomePage = () => {
  return (
    <Box className="home">
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={FormParams} />
        </Switch>
      </Router>
    </Box>
  );
};

export default HomePage
