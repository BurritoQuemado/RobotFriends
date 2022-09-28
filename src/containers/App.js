import React, { useState, useEffect } from "react";
import CardsList from "../components/cardsList";
import SearchBox from "../components/searchBox";
import Scroll from "../components/Scroll";
import '../styles/App.css'

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {setRobots(users)});
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  })
  return (
      <div className="tc">
        <h1 className="f1" >RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardsList robots={filteredRobots} />
        </Scroll>
      </div>
  );
}

export default App;
