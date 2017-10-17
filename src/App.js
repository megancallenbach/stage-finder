import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default App;
