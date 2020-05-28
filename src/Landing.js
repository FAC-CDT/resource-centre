import React from 'react';
import { Link } from 'react-router-dom';
import ParticipantMenu from './Participant-menu.js';
import StaffMenu from './Staff-menu.js';

const Menu = ({ location }) => {
	const userType = location.search.split('=')[1];
	if (userType === 'staff') {
		return (<StaffMenu />)
	} else if (userType === 'participant'){
		return (<ParticipantMenu />)
	} else return (
		<section>
			<h1>401 error: Unauthorized</h1>
			<Link to='/'><button>Back to the homepage</button></Link>
		</section>
	)
}

export default Menu;
