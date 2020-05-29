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
// REFACTOR
		<>
		<PartNavbar />
		<h1>{session.records[0].fields.title}</h1>
		<p>Session host: {session.records[0].fields.host}</p>
		<img alt="session host" src={session.records[0].fields.host_image[0].url} />
		{session.records[0].fields.resource1
        ? <a target="_blank" rel="noopener noreferrer" href={session.records[0].fields.resource1}>{session.records[0].fields.resource1}</a>
        : null
      }
		</>
	)
}

export default Session;
