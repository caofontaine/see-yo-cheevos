import React from 'react';
import './UserSearch.css';

const UserSearch = ({ setGamerTag, getAchievements }) => {
	return (
		<div>
      <input className='searchBox' type ='search' placeholder='search gamertag' onChange={setGamerTag}/>
      <input className='searchButton' type="submit" value="Search" onClick={getAchievements} />
		</div>
	)
}

export default UserSearch;
