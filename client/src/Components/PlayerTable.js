import React from 'react';
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const PlayerTable = props => {
  
  const players = props.players;
  return(
    <div className="player-card">
      
      <Table striped bordered>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Country</th>
            <th>Times Searched</th>
          </tr>
        </thead>
        <tbody>
          
          {players.map(player => {
            //console.log(props);
            return(
              <tr key={player.name}>
                <td>{player.name}</td>
                <td>{player.country}</td>
                <td>{player.searches}</td>
              </tr>
            )
          })}      
        </tbody>
      </Table>

    </div>
  )
};

export default PlayerTable;