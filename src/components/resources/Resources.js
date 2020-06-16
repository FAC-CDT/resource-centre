import React from 'react';
import whatsapp from './icons/whatsapp-link.svg';
import zoom from './icons/zoom-link.svg';
import pdf from './icons/pdf-link.svg';
import website from './icons/website-link.svg';
import google from './icons/google-link.svg';
import youtube from './icons/yt-link.svg';
import covid from './icons/covid-link.svg';
import other from './icons/other-link.svg';
import {ResourceQuestions} from '../../utils/Questions.js';
import Navbar from '../navbar/Navbar.js';
import './Resources.css';

const Resources = ({userInfo}) => {
  const [resources, setResources] = React.useState(null);

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google,
    coronavirus: covid,
    other: other
  };

const getResources = async () => {
	await (await fetch(`/.netlify/functions/getResources/getResources.js`, {
    method: "POST",
    body: JSON.stringify(userInfo.organisation),
  }))
		.json()
		.then((data) => setResources(data))
		.catch(console.error);
};

  React.useEffect(() => {
    getResources();
    // eslint-disable-next-line
  }, []);

  if (!resources) {
    return (
      <section>
        <Navbar />
        <h1>Loading...</h1>
      </section>
    );
  }

  if (!userInfo.organisation) {
    return (
      <article>
        <Navbar />
        <h1>We don't have your organisation, please log out and try again</h1>
      </article>
    )
  }
  return (
    <section>
      <Navbar />
      <h1>Resources</h1>

        {resources.records.length === 0 ? (
          <h2>There are currently no resources registered</h2>
        ) : (
          resources.records.map((resource) => (
            <article className="resource-container">
            <a
              className="resource-icon"
              key={resource.id}
              href={resource.fields[ResourceQuestions.resource_url]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <figure>
                <img
                  src={icons[resource.fields[ResourceQuestions.type]]}
                  alt={icons[resource.fields[ResourceQuestions.type]]}
                />
                <figcaption>
                  {resource.fields[ResourceQuestions.title]}
                </figcaption>
              </figure>
            </a>
            </article>
          ))
        )}

    </section>
  );
};

export default Resources;
