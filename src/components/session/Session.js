import React from "react";
import Navbar from "../navbar/Navbar.js";
import { Link, withRouter } from "react-router-dom";
import whatsapp from "../resources/icons/whatsapp-link.svg";
import zoom from "../resources/icons/zoom-link.svg";
import pdf from "../resources/icons/pdf-link.svg";
import website from "../resources/icons/website-link.svg";
import google from "../resources/icons/google-link.svg";
import youtube from "../resources/icons/yt-link.svg";
import other from "../resources/icons/other-link.svg";
import images from "../resources/icons/image-link.svg";
import slide from "../resources/icons/slide-link.svg";
import covid from "../resources/icons/covid-link.svg";
import share from "../resources/icons/sharepoint-link.svg";
import { ReactComponent as Help } from "./icons/help-btn.svg";

import "./Sessions.css";

const Session = (props) => {
  const [session, setSession] = React.useState(null);
  const sessionId = props.location.search.split("=")[1];

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google,
    other: other,
    image: images,
    slideshow: slide,
    coronavirus: covid,
    sharepoint: share,
  };

  const getSession = async () => {
    await (
      await fetch(`/.netlify/functions/getThisSession/getThisSession.js`, {
        method: "POST",
        body: JSON.stringify({ id: sessionId }),
      })
    )
      .json()
      .then((data) => setSession(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    getSession();
    // eslint-disable-next-line
  }, []);

  if (!session) {
    return (
      <article>
        <Navbar />
        <h1>Loading...</h1>;
      </article>
    );
  }

  if (!props.localUserInfo.organisation) {
    return (
      <article>
        <Navbar />
        <h2>We don't have your organisation, please log out and try again</h2>
      </article>
    );
  }
  const sessionPath = session.records[0].fields;
  const image = sessionPath.host_image;

  return (
    <section>
      <Navbar />
      <section className="session-container">
        <h1>{sessionPath.session_title}</h1>
        <article className="host-container">
          <img alt="session host" src={image} className="host-image" />
          <p>Session host: {sessionPath.session_host}</p>
        </article>
        <article className="session-times">
          <p>{sessionPath.session_date}</p>
          <p>
            {sessionPath.start_time} - {sessionPath.end_time}
          </p>
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
              <figcaption>{sessionPath.resource1_title} </figcaption>
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
              <figcaption>{sessionPath.resource2_title} </figcaption>
            </a>
          ) : null}

          {sessionPath.resource3_url ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.resource3}
            >
              <img
                alt={sessionPath.resource3_category}
                src={icons[sessionPath.resource3_category]}
              />
              <figcaption>{sessionPath.resource3_title} </figcaption>
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
              <figcaption>{sessionPath.resource4_title} </figcaption>
            </a>
          ) : null}

          {sessionPath.staff_resource1_url &&
          props.localUserInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.staff_resource1_url}
            >
              <img
                alt={sessionPath.staff_resource1_category}
                src={icons[sessionPath.staff_resource1_category]}
              />
              <figcaption>{sessionPath.staff_resource1_title} </figcaption>
            </a>
          ) : null}

          {sessionPath.staff_resource2_url &&
          props.localUserInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath.staff_resource2_url}
            >
              <img
                alt={sessionPath.staff_resource2_category}
                src={icons[sessionPath.staff_resource2_category]}
              />
              <figcaption>{sessionPath.staff_resource2_title} </figcaption>
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

export default withRouter(Session);
