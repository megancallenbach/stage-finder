import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">


        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
