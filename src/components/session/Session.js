import React from "react";
import Navbar from "../navbar/Navbar.js";
import { Link } from "react-router-dom";
import whatsapp from "../resources/icons/whatsapp-link.svg";
import zoom from "../resources/icons/zoom-link.svg";
import pdf from "../resources/icons/pdf-link.svg";
import website from "../resources/icons/website-link.svg";
import google from "../resources/icons/google-link.svg";
import youtube from "../resources/icons/yt-link.svg";
import { ReactComponent as Help } from "./icons/help-btn.svg";

import "./Sessions.css";

const Session = ({ userInfo }) => {
  const [session, setSession] = React.useState(null);

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google
  };

  const getSession = async () => {
    await (await fetch(`/.netlify/functions/getSession/getSession.js`, {
      method: "POST",
      body: JSON.stringify(userInfo.organisation)
    }))
      .json()
      .then(data => setSession(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    getSession();
    // eslint-disable-next-line
  }, []);

  // console.log(session);
  if (!session) {
    return (
      <article>
        <Navbar />
        <h1>Loading...</h1>;
      </article>
    );
  }

  if (!userInfo.organisation) {
    return (
      <article>
        <Navbar />
        <h1>We don't have your organisation, please log out and try again</h1>
      </article>
    );
  }
  const sessionPath = session.records[0].fields;
  const image = sessionPath.host_image;
  console.log(image);

  return (
    <section>
      <Navbar />
      <section className="session-container">
        <h1>{sessionPath.session_title}</h1>
      <article className="host-container">
      <img alt="session host" src={image} className="host-image" />
        <p>Session host: {sessionPath.session_host}</p>
      </article>
        <article className="sess-resource-container">
          {sessionPath.resource1_url ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.resource1_url}
            >
              <img
                alt={sessionPath.resource1_category}
                src={icons[sessionPath.resource1_category]}
              />
              <figcaption>
                {sessionPath.resource1_title}{" "}
              </figcaption>
            </a>
          ) : null}

          {sessionPath.resource2_url ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.resource2_url}
            >
              <img
                alt={sessionPath.resource2_category}
                src={icons[sessionPath.resource2_category]}
              />
              <figcaption>
                {sessionPath.resource2_title}{" "}
              </figcaption>
            </a>
          ) : null}

          {sessionPath.resource3 ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.resource3}
            >
              <img
                alt={sessionPath.resource3_category}
                src={icons[sessionPath.resource3_category]}
              />
              <figcaption>
                {sessionPath.resource3_title}{" "}
              </figcaption>
            </a>
          ) : null}

          {sessionPath.resource4_url ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.resource4_url}
            >
              <img
                alt={sessionPath.resource4_category}
                src={icons[sessionPath.resource4_category]}
              />
              <figcaption>
                {sessionPath.resource4_title}{" "}
              </figcaption>
            </a>
          ) : null}

          {sessionPath.staff_resource1_url &&
          userInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.staff_resource1_url}
            >
              <img
                alt={sessionPath.staff_resource1_category}
                src={icons[sessionPath.staff_resource1_category]}
              />
              <figcaption>
                {sessionPath.resource1_title}{" "}
              </figcaption>
            </a>
          ) : null}

          {sessionPath.staff_resource2 &&
          userInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.staff_resource2_url}
            >
              <img
                alt={sessionPath.staff_resource2_category}
                src={icons[sessionPath.staff_resource2_category]}
              />
              <figcaption>
                {sessionPath.resource2_title}{" "}
              </figcaption>
            </a>
          ) : null}
        </article>
      </section>
      <Link to="/help" className="help">
        <Help />
      </Link>
    </section>
  );
};

export default Session;
