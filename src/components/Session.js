import React from 'react';
import PartNavbar from './navbar/PartNavbar.js';
// import {ReactComponent as Whatsapp } from './resources/icons/whatsapp-link.svg';
// import {ReactComponent as Zoom } from './resources/icons/zoom-link.svg';
// import {ReactComponent as Pdf } from './resources/icons/pdf-link.svg';
// import {ReactComponent as Website } from './resources/icons/website-link.svg';
// import {ReactComponent as Yt } from './resources/icons/yt-link.svg';
// import {ReactComponent as Google} from './resources/icons/google-link.svg'
import Youtube from './resources/icons/yt-link.svg'


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


console.log(session.records[0].fields.resource1_type)

	return (
// REFACTOR

		<>

		<PartNavbar />
		<h1>{session.records[0].fields.title}</h1>
		<p>Session host: {session.records[0].fields.host}</p>
		<img alt="session host" src={session.records[0].fields.host_image[0].url} />

		{session.records[0].fields.resource1
        ? <a target="_blank" rel="noopener noreferrer" href={session.records[0].fields.resource1}>
				{session.records[0].fields.resource1_type}</a>
        : null
      }
			{session.records[0].fields.resource2
	        ? <a target="_blank" rel="noopener noreferrer" href={session.records[0].fields.resource2}>
					{session.records[0].fields.resource2_type}</a>
	        : null
	      }
				{session.records[0].fields.resource3
		        ? <a target="_blank" rel="noopener noreferrer" href={session.records[0].fields.resource3}>
						{session.records[0].fields.resource3_type}</a>
		        : null
		      }
					{session.records[0].fields.resource4
			        ? <a target="_blank" rel="noopener noreferrer" href={session.records[0].fields.resource4}>
							{session.records[0].fields.resource4_type}</a>
			        : null
			      }
		</>
	)
}

export default Session;
