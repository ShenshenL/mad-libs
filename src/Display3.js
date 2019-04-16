import React, { Component } from 'react';

import './App.css';

class Display3 extends Component {
  
  render() {
    return (
      <div className="display">
      
      <p>{this.props.text3}</p>
      
      </div>
    );
  }
}

export default Display3;