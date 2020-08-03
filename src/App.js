import React, {Component} from 'react';
import './App.css';
import CardList from "./CardList";
import 'tachyons';

class App extends Component {


  render() {

    return (
      <div className="App">
        <h1 className="tc tl">Robo Friends</h1>
        <CardList/>
      </div>
    );
}}

export default App;
