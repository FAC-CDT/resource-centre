import React from "react";
import whatsapp from "./icons/whatsapp-link.svg";
import zoom from "./icons/zoom-link.svg";
import pdf from "./icons/pdf-link.svg";
import website from "./icons/website-link.svg";
import google from "./icons/google-link.svg";
import youtube from "./icons/yt-link.svg";
import { ResourceQuestions } from "../../utils/Questions.js";
import Navbar from "../navbar/PartNavbar.js";
import "./Resources.css";

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
    return (
      <section>
        <Navbar />
        <h1>Loading...</h1>
      </section>
    );
  }

  console.log(resources);
  return (
    <article>
      <Navbar />
      <h1>Resources</h1>
      <section className="resource-container">
        {resources.records.length === 0 ? (
          <h2>There are currently no resources registered</h2>
        ) : (
          resources.records.map((resource) => (
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
                <figcaption className="resource-title">
                  {resource.fields[ResourceQuestions.title]}
                </figcaption>
              </figure>
            </a>
          ))
        )}
      </section>
    </article>
  );
};

export default Resources;
