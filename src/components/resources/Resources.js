import React from 'react';
import whatsapp from './icons/whatsapp-link.svg';
import zoom from './icons/zoom-link.svg';
import pdf from './icons/pdf-link.svg';
import website from './icons/website-link.svg';
import google from './icons/google-link.svg';
import youtube from './icons/yt-link.svg';
import PartNavbar from '../navbar/PartNavbar.js';
import './Resources.css';

const Resources = () => {
const [resources, setResources] = React.useState(null);

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google,
  };
const getResources = async () => {
	await (await fetch(`/.netlify/functions/getResources/getResources.js`))
		.json()
		.then((data) => setResources(data))
		.catch(console.error);
};

React.useEffect(() => {
	getResources();
}, []);


if (!resources) {
	return <h1>Loading...</h1>;
}

	return (
		<>
		<PartNavbar />
			<h1>Resources</h1>
	{resources.records.map(resource => (

<section key={resource.id}>
	<a
		href={resource.fields.resource_url}
		target='_blank'
		rel='noopener noreferrer'

>
 <figure>
	 <img
	 	className='resource-image'
		src={icons[resource.fields.type]}
		alt={icons[resource.fields.type]}
	/>
		<figcaption
			className='resource-title'
			>
			{resource.fields.title}
		</figcaption>
 </figure>
</a>
</section>
))}

</>
)}

export default Resources;
