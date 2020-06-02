import React from 'react';
// import {ReactComponent as Whatsapp } from './icons/whatsapp-link.svg';
// import {ReactComponent as Zoom } from './icons/zoom-link.svg';
// import {ReactComponent as Pdf } from './icons/pdf-link.svg';
// import {ReactComponent as Website } from './icons/website-link.svg';
// import {ReactComponent as Yt } from './icons/yt-link.svg';
// import {ReactComponent as Google} from './icons/google-link.svg'
import PartNavbar from '../navbar/PartNavbar.js';
import './Resources.css';

const Resources = () => {
const [resources, setResources] = React.useState(null);

const getResources = async () => {
	await (await fetch(`/.netlify/functions/getResources/getResources.js`))
		.json()
		.then((data) => setResources(data))
		.catch(console.error);
};

React.useEffect(() => {
	getResources();
}, []);

// console.log(resources);
if (!resources) {
	return <h1>Loading...</h1>;
}

	return (
		<>
		<PartNavbar />

	{resources.records.map(resource => (
		<h1> {resource.fields.title} </h1>
))}
</>
)}

export default Resources;
