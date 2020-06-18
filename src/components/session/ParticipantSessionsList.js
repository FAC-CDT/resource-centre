import React from "react";
import Navbar from "../navbar/Navbar.js";
import { Link } from "react-router-dom";
import "../staff-options/EditBar.css";

const EditSessions = ({ userInfo }) => {
  const [sessionsToJoin, setSessionsToJoin] = React.useState(null);

  const getSessionsToJoin = async () => {
    await (
      await fetch(`/.netlify/functions/getSession/getSession.js`, {
        method: "POST",
        body: JSON.stringify(userInfo.organisation),
      })
    )
      .json()
      .then((data) => setSessionsToJoin(data))
      .catch(console.error);
  };

  React.useEffect(() => {
    getSessionsToJoin();
    // eslint-disable-next-line
  }, []);

  if (!sessionsToJoin) {
    return (
      <section>
        <Navbar />
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <article>
      <Navbar />
      <h1>Your Sessions</h1>
      <p>You can pick a session to join</p>
      {sessionsToJoin.records.length === 0 ? (
        <h2>There are currently no sessions scheduled</h2>
      ) : (
        sessionsToJoin.records.map((session) => (
          <section className="session-option" key={session.id}>
            <img
              src={session.fields.host_image}
              alt="session host"
              className="session-option-img"
            />

            <div className="session-option-info">
              <span>{session.fields.session_title}</span>
              <span>Host: {session.fields.session_host}</span>
              <span>{session.fields.session_date}</span>
              <span>
                {session.fields.start_time} - {session.fields.end_time}
              </span>
            </div>

            <Link to={`/session?id=${session.fields.session_id}`}>
              <button className="view-button">Join</button>
            </Link>
          </section>
        ))
      )}
    </article>
  );
};

export default EditSessions;
