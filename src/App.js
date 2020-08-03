import React, {Component} from 'react';
import './App.css';
import Card from "./Card";
import 'tachyons';
import {robots} from './robots';

class App extends Component {


  render() {

    return (
      <div className="App">
        <h1 className="tc tl">Robo Friends</h1>
        <div>
          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
          <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
          <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        </div>
      </div>
    );
}}

export default App;
