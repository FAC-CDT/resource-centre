import React from 'react';
import PartNavbar from './navbar/PartNavbar.js';

const Session = () => {
	const [session, setSession] = React.useState(null);

	const getSession = async () => {
		await(
		await fetch(`/.netlify/functions/getSession/getSession.js`
		))
			.json()
			.then(data => setSession(data))
			.catch(console.error);
	}

	React.useEffect(() => {
		getSession();
	}, []);
	
	console.log(session);
	if (!session) {
		return (<h1>Loading...</h1>)
	}
	return (
		
		<>
		<PartNavbar />
		<h1>{session.records[0].fields.title}</h1>
		<p>Session host: {session.records[0].fields.host}</p>
		<img alt="session host" src={session.records[0].fields.host_image[0].url} />
		<h2>Description</h2>
		<p>{session.records[0].fields.description}</p>

		</>
	)
}

export default Session;
