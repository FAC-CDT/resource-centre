import React from 'react';
import { Link  } from 'react-router-dom';

const Landing = () => {
	return (
		<nav>
			<Link to='/session' alt="Join the current session"><button>Join session</button></Link>
			<Link to='/resources' alt="View all resources"><button>View Resources</button></Link>
			<Link to='/help' alt="How to use this app"><button>Tutorial</button></Link>
		</nav>
	)
}

export default Landing;
