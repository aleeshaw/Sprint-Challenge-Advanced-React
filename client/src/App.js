import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerCard from './Components/PlayerCard';

class App extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        console.log("api results", res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(error => {
        console.log(error)
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Women's World Cup Player Search Stats</h1>

        <div className="player-info">
          {this.state.players.map(player => {
            return (
              <div key={player.name}>
                <PlayerCard 
                  player={player}
                />
              </div>
            )
          })};
        </div>
      </div>
    );

    }
}

export default App;
