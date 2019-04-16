import React, { Component } from 'react';

import './App.css';

class Display2 extends Component {
  
  render() {
    return (
      <div className="display">
      
      <p>{this.props.text2}</p>
      </div>
    );
  }
}

export default Display2;