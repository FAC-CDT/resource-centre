import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as HomeSvg} from './icons/home.svg';
import './Navbar.css';

const StaffNavbar = () => {
	return (
		<>
		<section className="navbar">
		<Link to='/landing?menu=staff'><HomeSvg className="home"/></Link>
		</section>
		</>
	)
}

export default StaffNavbar;
