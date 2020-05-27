import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ user, setUser }) => {
	console.log(user);
	if (user === "staff") {
		return (
			<section>
				<h1>Hello Staff</h1>
				<Link to='/'><button onClick={() => setUser(null)}>Log out</button></Link>
			</section>
		)
	} else if (user === "student"){
		return (
			<section>
				<h1>Hello Participant</h1>
				<Link to='/'><button onClick={() => setUser(null)}>Log out</button></Link>
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
