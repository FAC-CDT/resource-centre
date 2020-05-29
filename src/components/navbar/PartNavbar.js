import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as HomeSvg} from './icons/home.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<>
		<section className="navbar">
		<Link to='/landing?menu=participant'><HomeSvg className="home"/></Link>
		</section>
		</>
	)
}

export default Navbar;
