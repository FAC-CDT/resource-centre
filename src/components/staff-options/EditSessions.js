import React from "react";
import Navbar from "../navbar/StaffNavbar.js";
import { SessionQuestions } from "../../utils/Questions.js";

const EditSessions = () => {
  const [sessionsToDelete, setSessionsToDelete] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  const getSessionsToDelete = async () => {
    await (await fetch(`/.netlify/functions/getSession/getSession.js`))
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

  console.log(sessionsToDelete);
  return (
    <article>
      <Navbar />
      <h1>Your Sessions</h1>
      {sessionsToDelete.records.length === 0 ? (
        <h2>There are currently no sessions scheduled</h2>
      ) : (
        sessionsToDelete.records.map((session) => (
          <section className="editbar" key={session.id}>
            <h2>{session.fields[SessionQuestions.title]}</h2>

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
