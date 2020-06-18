import React from "react";
import Navbar from "../navbar/Navbar.js";
import { Link } from 'react-router-dom';

const EditSessions = ({ userInfo }) => {
  const [sessionsToDelete, setSessionsToDelete] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  const getSessionsToDelete = async () => {
    await (await fetch(`/.netlify/functions/getSession/getSession.js`, {
      method: "POST",
      body: JSON.stringify(userInfo.organisation),
    }))
      .json()
      .then((data) => setSessionsToDelete(data))
      .catch(console.error);
  };

  const deleteSession = async (id) => {
    if (window.confirm("Are you sure you want to delete this session?")) {
      await fetch(`/.netlify/functions/deleteSession/deleteSession.js`, {
        method: "DELETE",
        body: JSON.stringify(id),
      })
        .then(setRefresh(!refresh))
        .catch(console.error);
    } else {
      return;
    }
  };
  React.useEffect(() => {
    getSessionsToDelete();
    // eslint-disable-next-line
  }, [refresh]);

  // const reconfigureTime = (startAirDate, endAirDate) => {
  // let startDate = startAirDate.split('T')[0];
  // let endDate = endAirDate.split('T')[0];
  // let startTime = startAirDate.split('T')[1].split('.')[0];
  // let endTime = endAirDate.split('T')[1].split('.')[0];
  // let dateAndTime = `${startDate}, ${startTime} - ${endDate}, ${endTime}`;
  // return dateAndTime;
  // }

  if (!sessionsToDelete) {
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
      <p>A list of your organisations sessions</p>
      {sessionsToDelete.records.length === 0 ? (
        <h2>There are currently no sessions scheduled</h2>
      ) : (
        sessionsToDelete.records.map((session) => (
          <section className="editbar" key={session.id}>
            <h2>{session.fields.session_title}</h2>
            <Link to={`/edit-session?id=${session.fields.session_id}`}>
            Edit
            </Link>
            <button
              className="delete-button"
              onClick={() => {
                deleteSession({ id: session.id });
              }}
            >
              Delete
            </button>
          </section>
        ))
      )}
    </article>
  );
};

export default EditSessions;
