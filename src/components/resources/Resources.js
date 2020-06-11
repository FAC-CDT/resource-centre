import React from "react";
import whatsapp from "./icons/whatsapp-link.svg";
import zoom from "./icons/zoom-link.svg";
import pdf from "./icons/pdf-link.svg";
import website from "./icons/website-link.svg";
import google from "./icons/google-link.svg";
import youtube from "./icons/yt-link.svg";
import covid from "./icons/covid-link.svg";
import other from "./icons/other-link.svg";
import { ResourceQuestions } from "../../utils/Questions.js";
import PartNavbar from "../navbar/PartNavbar.js";
import "./Resources.css";

const Resources = ({ userInfo }) => {
  const [resources, setResources] = React.useState(null);
  const [filteredResources, setFilteredResources] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState(null);

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google,
    coronavirus: covid,
    other: other,
  };

  const getResources = async () => {
    await (
      await fetch(`/.netlify/functions/getResources/getResources.js`, {
        method: "POST",
        body: JSON.stringify(userInfo.organisation),
      })
    )
      .json()
      .then((data) => setResources(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    getResources();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    filterResources(searchTerm);
    // eslint-disable-next-line
  }, [searchTerm])

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  //let filteredResources = "";
  const filterResources = (searchTerm) => {
    setFilteredResources(
      resources.records.filter((resource) => {
        return resource.fields[ResourceQuestions.title]
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
    return filteredResources;
  };

  if (!resources) {
    return (
      <section>
        <PartNavbar />
        <h1>Loading...</h1>
      </section>
    );
  }

  if (!userInfo.organisation) {
    return (
      <article>
        <PartNavbar />
        <h1>We don't have your organisation, please log out and try again</h1>
      </article>
    );
  }
  return (
    <article>
      <PartNavbar />
      <h1>Your Resources</h1>
      <input
        value={searchTerm}
        type="text"
        className="searchbar"
        id="searchbar"
        aria-label="Filter resources"
        placeholder="Search resources"
        onChange={updateSearchTerm}
      />
      <section className="resource-container">
        {/* {!resources ? (
          <h2>There are currently no resources registered</h2>
        ) : */}
        {filteredResources
          ? filteredResources.map((resource) => (
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
          : resources.records.map((resource) => (
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
            ))}
      </section>
    </article>
  );
};

export default Resources;
