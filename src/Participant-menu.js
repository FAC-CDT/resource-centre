import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantMenu = () => {
	return (
		<section>
			<h1>Welcome Participant</h1>
			<button>Visit session</button>
			<button>Resources</button>
			<button>Help</button>
			<Link to='/'>Log out</Link>
		</section>
	)
}

export default ParticipantMenu;
