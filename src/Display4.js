import React, { Component } from 'react';

import './App.css';

class Display4 extends Component {
  
  render() {
    return (
      <div className="display">
      
      <p>{this.props.text4}</p>
      </div>
    );
  }
}

export default Display4;