import React from 'react';

const UserSearch = ({ setGamerTag, getGamerTagId }) => {
	return (
		<div>
      <input type ='search' placeholder='search gamertag' onChange={setGamerTag}/>
      <input type="submit" value="Search" onClick={getGamerTagId} />
		</div>
	)
}

export default UserSearch;
