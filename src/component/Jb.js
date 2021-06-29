import React,{Component} from "react";
import JobsInfo from "./JobsInfo";
class Jb extends Component {

    constructor(){
        super();
        this.state={
            name:"React"
        };
    }

  render (){
    return <div>
        
      <JobsInfo />
    </div>;
  }
}

export default Jb;
