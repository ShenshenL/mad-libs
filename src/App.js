import React, { Component } from 'react';
import './App.css';
import Display1 from './Display1';
import Display2 from './Display2';
import Display3 from './Display3';
import Display4 from './Display4';
class App extends Component {
  state = { showing: true };
  constructor(props){
    super(props);
    this.state={
      currentInput1:"",
      currentInput2:" ",
      currentInput3:" ",
      currentInput4:" "
      }
    }

  inputChanged1=(event)=>{
    console.log(event.target.inputChanged1); //event:正在发生的事情 target:浏览器从event carry信息
    let inputValue1=event.target.value;
    console.log(inputValue1)

    this.setState({currentInput1:inputValue1})//{object}
  }

  inputChanged2=(event)=>{

    let inputValue2=event.target.value;
    console.log(inputValue2)

    this.setState({currentInput2:inputValue2})
  }

  inputChanged3=(event)=>{

    let inputValue3=event.target.value;
    console.log(inputValue3)

    this.setState({currentInput3:inputValue3})
  }

  inputChanged4=(event)=>{

    let inputValue4=event.target.value;
    console.log(inputValue4)

    this.setState({currentInput4:inputValue4})
  }

 
  
  render() {
     const { showing } = this.state;
     return (
      <div className="App">
         <h3>the Story generator</h3>
         <p>NAME</p>
         <input placeholder='name' onInput={this.inputChanged1}></input>
         <br></br>
         <br></br>
         <p>DATE</p>
         <input placeholder='date'  onInput={this.inputChanged2}></input>
         <br></br>
         <br></br>
         <p>WHETHER</p>
         <input placeholder='whether' onInput={this.inputChanged3}></input>
         <br></br>
         <br></br>
         <p>PLACE</p>
         <input placeholder='place' onInput={this.inputChanged4}></input>
         <br></br>
         <br></br>
         <button onClick={() => this.setState({ showing: !showing })}>Show my story</button>
         { showing ? <div>Here is your story!</div> : null}
        <Display1 text1={this.state.currentInput1}/>
        <Display2 text2={this.state.currentInput2}/>
        <Display3 text3={this.state.currentInput3}/>
        <Display4 text4={this.state.currentInput4}/>
      
        <br></br>
      {showing?<div className= "story"> {this.state.currentInput1} stands by the window with a old story book in hand. It is {this.state.currentInput2}, and it's {this.state.currentInput3} outside. 
      {this.state.currentInput1} opens the book slowly. The first page is a picture of {this.state.currentInput4}, under which is a sentence: Please write your own story in following pages. </div>: null}
  </div>
     )
  }
}


export default App;
