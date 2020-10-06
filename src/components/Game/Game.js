import React from 'react';
import './Game.css';

const Game = ({ id, name, currentGS, maxGS }) => {
const pct = (currentGS/maxGS) * 100;

	return (
		<div id={id} className='game'>
			<h2>{name}</h2>
			<h3>{currentGS}/{maxGS}</h3>
			<hr style={{width: `${pct}%`}}/>
		</div>
	)
}

export default Game;
