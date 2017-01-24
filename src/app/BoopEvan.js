/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import BoopHeader from './BoopHeader'
import BoopButton from './BoopButton'
import BoopAlert  from './BoopAlert'
import BoopSound  from './BoopSound'
import BoopFeed   from './BoopFeed'
import BoopShare  from './BoopShare'

var BoopEvan = React.createClass({

  boopEvanStyle: {
    textAlign: 'center',
    paddingTop: 200
  },

  boopEvanTheme: getMuiTheme({
    palette: {
      accent1Color: deepOrange500,
    },
  }),

  getInitialState: function() {
    return {
      booped: false,
      booping: false
    }
  },

  boopTheEvan: function() {
    this.setState({
      booped: true,
      booping: true
    });
  },

  noMoreBoop: function() {
    this.setState({
      booping: false,
    });
  },

  render: function() {

    return (
      <MuiThemeProvider muiTheme={this.boopEvanTheme}>
        <div style={this.boopEvanStyle}>
          <BoopShare />
          <BoopHeader />
          <BoopButton boopFunction={this.boopTheEvan} />
          <BoopFeed  booped={this.state.booped} />
          <BoopAlert booping={this.state.booping} boopedFunction={this.noMoreBoop} />
          <BoopSound booping={this.state.booping} />
        </div>
      </MuiThemeProvider>
    );

  }

});

export default BoopEvan;