import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<nav>
			<Link to='/menu' alt="Log in as participant"><button>Log in as Participant</button></Link>
			<Link to='/menu' alt="Log in as organisation"><button>Log in as Staff</button></Link>
		</nav>
	)
}

export default Landing;
