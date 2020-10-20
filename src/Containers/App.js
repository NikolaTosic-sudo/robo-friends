import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import 'tachyons';

import {setSearchField} from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value))
    }
};

class App extends Component {

    state = {
      robots: [],
    };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          return response.json();
        })
        .then(users => {
          this.setState({
            robots: users
          })
        })
  }

  render() {

    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })

    if(this.state.robots.length === 0) {

      return <h1>Loading...</h1>

    } else {

        return (
          <div className="tc">
            <h1 className="f1">Robo Friends</h1>
            <SearchBox searchChange={this.props.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots}/>
            </Scroll>
          </div>
        );
}}}

export default connect(mapStateToProps, mapDispatchToProps)(App);
