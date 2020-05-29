import React from 'react';
import PartNavbar from './navbar/PartNavbar.js';

const Session = () => {

	const getSession = async () => {
		await(
		await fetch(`/.netlify/functions/getSession/getSession.js`
		))
			.json()
			.then(data => console.log(data))
			.catch(console.error);
	}
	
	return (
		<>
		<PartNavbar />
		<h1> This is the sessions page </h1>
			<button onClick={getSession}>get data</button>
		</>
	)
}

export default Session;
