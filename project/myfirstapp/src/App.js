import React from "react";
class AppInner extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const textStyle = {color:this.props.color};
    return <span style={textStyle}>{this.props.name}</span> 
  }
}