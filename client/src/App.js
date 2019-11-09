import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerTable from './Components/PlayerTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Components/Nav';


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
        <Nav />
        <PlayerTable
          players={this.state.players}
        />        
      </div> //main app div
    );

    }
}

export default App;
