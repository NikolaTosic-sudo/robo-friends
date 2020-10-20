import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../assets/App.css';
import CardList from "../Components/CardList";
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'
import 'tachyons';

import { setSearchField, fetchRobots } from "../actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.fetchRobots.robots,
        isPending: state.fetchRobots.isPending,
        error: state.fetchRobots.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onFetchRobots: () => dispatch(fetchRobots())
    }
};

class App extends Component {


  componentDidMount() {
        this.props.onFetchRobots()
  }

  render() {

    const filteredRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
    })

    if(this.props.isPending) {

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
