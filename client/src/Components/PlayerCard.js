import React from 'react';

const PlayerCard = props => {
  

  return(
    <div className="player-card">
      <p>Name: <span>{props.player.name}</span></p>
      <p>Country: <span>{props.player.country}</span></p>
      <p>Times Searched: <span>{props.player.searches}</span></p>
    </div>
  )
};

export default PlayerCard;