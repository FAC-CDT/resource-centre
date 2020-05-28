import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ location }) => {
	const userType = location.search.split('=')[1];
	if (userType === 'staff') {
		return (
			<section>
				<h1>Hello Staff</h1>
				<Link to='/'><button>Log out</button></Link>
			</section>
		)
	} else if (userType === 'participant'){
		return (
			<section>
				<h1>Hello Participant</h1>
				<Link to='/'><button>Log out</button></Link>
			</section>
		)
	} else return (
		<section>
			<h1>401 error: Unauthorized</h1>
			<Link to='/'><button>Back to the homepage</button></Link>
		</section>
	)
}

export default Menu;
