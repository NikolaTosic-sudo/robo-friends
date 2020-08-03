import React, {Component} from 'react';
import './App.css';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import 'tachyons';

class App extends Component {


  render() {

    return (
      <div className="App tc">
        <h1 className="tc tl">Robo Friends</h1>
        <SearchBox />
        <CardList/>
      </div>
    );
}}

export default App;
