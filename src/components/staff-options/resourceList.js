import React from "react";
import Navbar from "../navbar/Navbar.js";
import { Link } from 'react-router-dom';
import "./EditBar.css";

const EditResource = ({ userInfo, localUserInfo }) => {

  const [resourcesToDelete, setResourcesToDelete] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  const getResourcesToDelete = async () => {
    await (
      await fetch(`/.netlify/functions/getResources/getResources.js`, {
        method: "POST",
        body: JSON.stringify(localUserInfo.organisation),
      })
    )
      .json()
      .then((data) => setResourcesToDelete(data))
      .catch(console.error);
  };

  const deleteResource = async (id) => {
    if (window.confirm("Are you sure you want to delete this resource?")) {
      await fetch(`/.netlify/functions/deleteResource/deleteResource.js`, {
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
    getResourcesToDelete();
    // eslint-disable-next-line
  }, [refresh]);

  if (!resourcesToDelete) {
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
      <h1>Your Resources</h1>
      <p>The general resources saved for your organisation </p>
      {resourcesToDelete.records.length === 0 ? (
        <h2>There are currently no resources registered</h2>
      ) : (
        resourcesToDelete.records.map((resource) => (
          <section key={resource.id} className="editbar">
            <div className="resource-heading">
              <span>{resource.fields.resource_title}</span>
            </div>
            <div className="button-box">
              <a
                href={resource.fields.resource_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="view-button">Visit</button>
              </a>
              <Link to={`/edit-resource?id=${resource.fields.resource_id}`}>
              <button className="edit-button">Edit</button>
            </Link>
              <button
                className="delete-button"
                onClick={() => {
                  deleteResource({ id: resource.id });
                }}
              >
                Delete
              </button>
            </div>
          </section>
        ))
      )}
    </article>
  );
};
export default EditResource;
