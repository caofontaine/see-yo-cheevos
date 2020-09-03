import React from 'react';

const Game = ({ id, name, currentGS, maxGS }) => {
	return (
		<div id='game'>
      <h1>{id}</h1>
			<h2>{name}</h2>
			<h3>{currentGS}</h3>
			<h4>{maxGS}</h4>
		</div>
	)
}

export default Game;
