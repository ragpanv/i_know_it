import React from "react";
import { Component } from "react";
import Internship from "./Internship";
class Intern extends Component {

  constructor(){
    super();
    this.state={
      name:"React"
    };
  }

  render() {
     return <div>
      <Internship />
    </div>
  };
}

export default Intern;
