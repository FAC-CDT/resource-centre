import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as HomeSvg} from './icons/home.svg';
import './Navbar.css';

const Navbar = ({ location }) => {
	const userType = location.search.split('=')[1];
		if (userType === 'staff') {
			return (
<Link to='/landing?menu=staff'><HomeSvg className="home"/></Link>
			)
		} else if (userType === 'participant'){
			return (
				<Link to='/landing?menu=participant'><HomeSvg className="home"/></Link>

			)
		} else return (
			<section>
				<h1>401 error: Unauthorized</h1>
				<Link to='/'><button>Back to the homepage</button></Link>
			</section>
		)
}

export default Navbar;
