import React from 'react';

const UserSearch = ({ setGamerTag, getAchievements }) => {
	return (
		<div>
      <input type ='search' placeholder='search gamertag' onChange={setGamerTag}/>
      <input type="submit" value="Search" onClick={getAchievements} />
		</div>
	)
}

export default UserSearch;
