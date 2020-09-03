import React from 'react';
import Game from '../Game/Game';

const AchList = ({ achievements }) => {
	return (
		<div id='achList'>
			{
				achievements.map((game) => {
					return (
						<Game
							key={game.titleId}
							id={game.titleId}
							name={game.name}
							currentGS = {game.currentGamerscore}
							maxGS = {game.totalGamerscore ? game.totalGamerscore : game.maxGamerscore}
						/>
					);
				})
			}
		</div>
	)
}

export default AchList;
