import React from 'react';
import '../css/Discuss.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Mentor from "./Mentor";
import Widget from './Widget';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route , NavLink,Link, Switch } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import Intern from './Intern';
import Jb from './Jb';
import Mntr from './Mntr';
 

function Discuss(){
    return (
      <div className="Discuss">
        <Navbar />
        <Router>
          <div className="centring">
            <NavLink
              style={{ paddingLeft: "550px"}}
              exact
              to="/internship"
            >
              <Button variant="contained">INTERNSHIP</Button>
            </NavLink>
            <NavLink
              style={{ paddingLeft: "20px" }}
              exact
              to="/job"
            >
              <Button variant="contained" color="primary">
                JOBS
              </Button>
            </NavLink>
            <NavLink
              style={{ padding: "20px"}}
              exact
              to="/mentor"
            >
              <Button variant="contained" color="secondary">
                MENTOR
              </Button>
            </NavLink>
            <br />
            <Switch>
              <Route exact path="/internship" component={Intern} />
              <Route exact path="/job" component={Jb} />
              <Route exact path="/mentor" component={Mntr} />
            </Switch>
          </div>
        </Router>
        <div className="disucss_content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    );
}

export default Discuss;
/*import React from 'react';
import '../css/Discuss.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Mentor from "./Mentor";
import Widget from './Widget';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Route , NavLink,Link, Switch } from 'react-router-dom';

import Button from "@material-ui/core/Button";
import Intern from './Intern';
import Jb from './Jb';
import Mntr from './Mntr';
import { Component } from 'react';
 const useStyles = makeStyles((theme) => ({
   root: {
     "& > *": {
       margin: theme.spacing(1),
       alignItems: 'center',
     },
   },
 }));



class Discuss extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      sintern: false,
      sjob: false,
      smentor: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "sintern":
        this.setState({ showHideDemo1: !this.state.sintern });
        break;
      case "sjob":
        this.setState({ showHideDemo2: !this.state.sjob });
        break;
      case "smentor":
        this.setState({ showHideDemo3: !this.state.sintern });
        break;
      
    }
  }
  render() {
    const{sintern, sjob, smentor}=this.state;
    return (
      <div className="Discuss">
        <Navbar />
        {/*    <Router>
          <div>
            <NavLink exact to="/internship">
              <Button variant="outlined">INTERNSHIP</Button>
            </NavLink>
            <NavLink exact to="/job">
              <Button variant="outlined" color="primary">
                JOBS
              </Button>
            </NavLink>
            <NavLink exact to="/mentor">
              <Button variant="outlined" color="secondary">
                MENTOR
              </Button>
            </NavLink>
            <br />
            <Switch>
              <Route exact path="/internship" component={Intern} />
              <Route exact path="/job" component={Jb} />
              <Route exact path="/mentor" component={Mntr} />
            </Switch>
          </div>
        </Router>
    *

        {sintern && <Intern />}
        <hr />
        {sjob && <Jb />}
        <hr />
        {smentor && <Mntr />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("sintern")}>
            Click to hide Demo1 component
          </button>
          <button onClick={() => this.hideComponent("sjob")}>
            Click to hide Demo2 component
          </button>
          <button onClick={() => this.hideComponent("smentor")}>
            Click to hide Demo3 component
          </button>
        </div>
        <div className="disucss_content">
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </div>
    );
  }
}

export default Discuss;*/