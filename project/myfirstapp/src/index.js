import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

class App extends React.Component{
  state = {childColor: "green" , name: "john"}
  changeColor = () => {
    const newcolor = document.getElementById("colorbox").value;
    this.setState({name:newcolor})
  }
  changeName = () => {
    const newname = document.getElementById("namebox").value;
    this.setState({name:newname})
  }
  render(){
    console.log("Inside render")
    return (
      <div>
        Color <input type='Text' onChange={this.changeColor} id='colorbox'/>
        <br/>
        Name <input type='Text' onChange={this.changeName} id='namebox'/>
        <AppInner color={this.state.childColor} name = {this.state.name}/>
      </div>
    )
  }
}
  