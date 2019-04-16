import React, { Component } from 'react';

import './App.css';

class Display1 extends Component {
  
  render() {
    return (
      <div className="display">
      
      <p>{this.props.text1}</p>
      </div>
    );
  }
}

export default Display1;