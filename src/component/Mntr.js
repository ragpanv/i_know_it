import React from "react";
import { Component } from "react";
import Mentor from "./Mentor";
class Mntr extends Component {

    constructor(){
        super();
        this.state={
            name:"React"
        }
    }

  render (){
    return <div>
      <Mentor />
    </div>
  };
}

export default Mntr;
