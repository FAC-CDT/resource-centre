import React from 'react';
import { ReactComponent as Whatsapp } from './icons/whatsapp-link.svg';
import { ReactComponent as Zoom } from './icons/zoom-link.svg';
import {ReactComponent as Pdf } from './icons/pdf-link.svg';
import {ReactComponent as Website } from './icons/website-link.svg';
import {ReactComponent as Yt } from './icons/yt-link.svg';
import {ReactComponent as Google} from './icons/google-link.svg'
import PartNavbar from '../navbar/PartNavbar.js';
import './Resources.css';

const Resources = () => {
	return (
		<>
		<PartNavbar />
		<h1> List of Resources </h1>
		<section className="resource-container">
		<Whatsapp />
		<Zoom />
		<Yt />
		<Google />
		<Pdf />
		<Website />
		</section>
		</>
	)
}

export default Resources;
