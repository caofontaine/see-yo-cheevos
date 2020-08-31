import React from 'react';

const Game = ({ key, name, currentGS }) => {
	return (
		<div>
      <h1>{key}</h1>
			<h2>{name}</h2>
			<h3>{currentGS}</h3>
		</div>
	)
}

export default Game;
