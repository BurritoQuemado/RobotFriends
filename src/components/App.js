import React, { Component } from "react";
import CardsList from "./cardsList";
import SearchBox from "./searchBox";
import Scroll from "./Scroll";
import '../styles/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({ robots: users})});
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
          <h1 className="f1" >RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardsList robots={filteredRobots} />
          </Scroll>
        </div>
    );
  }
}

export default App;