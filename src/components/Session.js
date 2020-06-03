import React from "react";
import PartNavbar from "./navbar/PartNavbar.js";
import { Link } from "react-router-dom";
import whatsapp from "./resources/icons/whatsapp-link.svg";
import zoom from "./resources/icons/zoom-link.svg";
import pdf from "./resources/icons/pdf-link.svg";
import website from "./resources/icons/website-link.svg";
import google from "./resources/icons/google-link.svg";
import youtube from "./resources/icons/yt-link.svg";

const Session = () => {
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
    await (await fetch(`/.netlify/functions/getSession/getSession.js`))
      .json()
      .then((data) => setSession(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    getSession();
  }, []);

  console.log(session);
  if (!session) {
    return <h1>Loading...</h1>;
  }

  const sessionPath = session.records[0].fields;
  // const title = session.records[0].fields.


  return (
    <article>
      <PartNavbar />
      <h1>{sessionPath.title}</h1>
      <p>Session host: {sessionPath.host}</p>
      <img alt="session host" src={sessionPath.host_image[0].url} />

      {sessionPath.resource1 ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sessionPath.resource1}
        >
          <img
            alt={sessionPath.resource1_type}
            src={icons[sessionPath.resource1_type]}
          />
        </a>
      ) : null}

      {sessionPath.resource2 ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sessionPath.resource2}
        >
          <img
            alt={sessionPath.resource2_type}
            src={icons[sessionPath.resource2_type]}
          />
        </a>
      ) : null}

      {sessionPath.resource3 ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sessionPath.resource3}
        >
          <img
            alt={sessionPath.resource3_type}
            src={icons[sessionPath.resource3_type]}
          />
        </a>
      ) : null}

      {sessionPath.resource4 ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={sessionPath.resource4}
        >
          <img
            alt={sessionPath.resource4_type}
            src={icons[sessionPath.resource4_type]}
          />
        </a>
      ) : null}
      <Link to="/help">Help</Link>
    </article>
  );
};

export default Session;
