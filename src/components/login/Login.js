import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Participant } from './buttons/participant-login.svg'
import {ReactComponent as Staff } from './buttons/staff-login.svg'
import './Login.css'


const Landing = () => {
	return (
		<>
		<h1> Welcome! </h1>
		<nav>
			<Link to='/landing?menu=participant' alt="Log in as a participant"><Participant /></Link>
			<Link to='/landing?menu=staff' alt="Log in as a member of an organisation"><Staff /></Link>
		</nav>
		</>
	)
}

export default Landing;
