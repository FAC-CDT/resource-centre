import React from 'react';
import {ReactComponent as HomeSvg} from './icons/home.svg';
import './Navbar.css';

const Navbar = () => {
	return (
		<>
		<section className="navbar">
		<HomeSvg className="home"/>
		</section>
		</>
	)
}

export default Navbar;
