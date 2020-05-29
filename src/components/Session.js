import React from 'react';


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

		<h1> This is the sessions page </h1>
			<button onClick={getSession}>get data</button>
		</>
	)
}

export default Session;
