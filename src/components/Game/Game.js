import React from 'react';

const Game = ({ id, name, currentGS }) => {
	return (
		<div id='game'>
      <h1>{id}</h1>
			<h2>{name}</h2>
			<h3>{currentGS}</h3>
		</div>
	)
}

export default Game;
