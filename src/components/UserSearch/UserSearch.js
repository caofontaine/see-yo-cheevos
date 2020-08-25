import React from 'react';

const UserSearch = ({ setGamerTag }) => {
	return (
		<div>
      <input type ='search' placeholder='search gamertag' onChange={setGamerTag}/>
      <input type="submit" value="Search" />
		</div>
	)
}

export default UserSearch;
