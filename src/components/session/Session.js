import React from "react";
import PartNavbar from "../navbar/PartNavbar.js";
import { Link } from "react-router-dom";
import whatsapp from "../resources/icons/whatsapp-link.svg";
import zoom from "../resources/icons/zoom-link.svg";
import pdf from "../resources/icons/pdf-link.svg";
import website from "../resources/icons/website-link.svg";
import google from "../resources/icons/google-link.svg";
import youtube from "../resources/icons/yt-link.svg";
import {ReactComponent as Help} from "./icons/help-btn.svg"
import { SessionQuestions } from "../../utils/Questions.js";

import "./Sessions.css";

const Session = ({ userInfo }) => {
  const [session, setSession] = React.useState(null);

  let icons = {
    youtube: youtube,
    whatsapp: whatsapp,
    zoom: zoom,
    pdf: pdf,
    website: website,
    google: google,
  };

  const getSession = async () => {
    await (await fetch(`/.netlify/functions/getSession/getSession.js`, {
      method: "POST",
      body: JSON.stringify(userInfo.organisation),
    }))
      .json()
      .then((data) => setSession(data))
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
        <PartNavbar />
        <h1>Loading...</h1>;
      </article>
    );
  }

  if (!userInfo.organisation) {
    return (
      <article>
        <PartNavbar />
        <h1>We don't have your organisation, please log out and try again</h1>
      </article>
    )
  }
  const sessionPath = session.records[0].fields;
  const image = sessionPath.Profile_pic[0].url;
  console.log(image);

  return (
    <section>
      <PartNavbar />
      <section className="session-container">
        <h1>{sessionPath[SessionQuestions.title]}</h1>
        <p>Session host: {sessionPath[SessionQuestions.host]}</p>
        <img alt="session host" src={image} className="host-image" />
        <article className="sess-resource-container">
          {sessionPath[SessionQuestions.resource1] ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.resource1]}
            >
              <img
                alt={sessionPath[SessionQuestions.resource1_type]}
                src={icons[sessionPath[SessionQuestions.resource1_type]]}
              />
            </a>
          ) : null}

          {sessionPath[SessionQuestions.resource2] ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.resource2]}
            >
              <img
                alt={sessionPath[SessionQuestions.resource2_type]}
                src={icons[sessionPath[SessionQuestions.resource2_type]]}
              />
            </a>
          ) : null}

          {sessionPath[SessionQuestions.resource3] ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.resource3]}
            >
              <img
                alt={sessionPath[SessionQuestions.resource3_type]}
                src={icons[sessionPath[SessionQuestions.resource3_type]]}
              />
            </a>
          ) : null}

          {sessionPath[SessionQuestions.resource4] ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.resource4]}
            >
              <img
                alt={sessionPath[SessionQuestions.resource4_type]}
                src={icons[sessionPath[SessionQuestions.resource4_type]]}
              />
            </a>
          ) : null}

          {sessionPath[SessionQuestions.staff_resource1] &&
          userInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.staff_resource1]}
            >
              <img
                alt={sessionPath[SessionQuestions.staff_resource1_type]}
                src={icons[sessionPath[SessionQuestions.staff_resource1_type]]}
              />
            </a>
          ) : null}

          {sessionPath[SessionQuestions.staff_resource2] &&
          userInfo.userType === "staff" ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={sessionPath[SessionQuestions.staff_resource2]}
            >
              <img
                alt={sessionPath[SessionQuestions.staff_resource2_type]}
                src={icons[sessionPath[SessionQuestions.staff_resource2_type]]}
              />
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
