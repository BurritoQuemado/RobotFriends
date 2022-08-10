import React, { Component } from "react";
import CardsList from "./components/cardsList";
import SearchBox from "./components/searchBox";
import { robots } from "./raws/robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
        <div className="tc">
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardsList robots={filteredRobots} />
        </div>
    );
  }
}

export default App;
