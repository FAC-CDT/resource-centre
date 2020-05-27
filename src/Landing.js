import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({ setUser }) => {
	return (
		<nav>
			<Link to='/menu' alt="Log in as a participant"><button onClick={() => setUser("student")}>Log in as a Participant</button></Link>
			<Link to='/menu' alt="Log in as a member of an organisation"><button onClick={() => setUser("staff")}>Log in as Staff</button></Link>
		</nav>
	)
}

export default Landing;
