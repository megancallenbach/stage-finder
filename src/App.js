import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="scroll">  
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
