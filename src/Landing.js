import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<nav>
			<Link to='/menu?u=participant' alt="Log in as a participant"><button>Log in as a Participant</button></Link>
			<Link to='/menu?u=staff' alt="Log in as a member of an organisation"><button>Log in as Staff</button></Link>
		</nav>
	)
}

export default Landing;
