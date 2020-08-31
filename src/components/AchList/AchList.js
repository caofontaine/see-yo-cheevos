import React from 'react';
import Game from '../Game/Game';

const AchList = ({ achievements }) => {
	return (
		<div>
			{
				achievements.map((game, i) => {
					return (
						<Game
							key={game[i].titleId}
							name={game[i].name}
							currentGS = {game[i].currentGamerscore}
						/>
					);
				})
			}
		</div>
	)
}

export default AchList;
