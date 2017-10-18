import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/muiTheme'


class App extends Component {
  render() {
    return (
     <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        {this.props.children}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
