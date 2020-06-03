import React from "react";
import StaffNavbar from "../navbar/StaffNavbar.js";
import { ResourceQuestions } from "../../utils/Questions";

const EditResource = () => {
  const [resourcesToDelete, setResourcesToDelete] = React.useState(null);
  const [refresh, setRefresh] = React.useState(false);

  const getResourcesToDelete = async () => {
    await (await fetch(`/.netlify/functions/getResources/getResources.js`))
      .json()
      .then((data) => setResourcesToDelete(data))
      .catch(console.error);
  };

  const deleteResource = async (id) => {
    if (window.confirm("Are you sure?")) {
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
  }, [refresh]);

  if (!resourcesToDelete) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <StaffNavbar />
      {resourcesToDelete.records.map((resource) => (
        <section key={resource.id}>
          <h2>{resource.fields[ResourceQuestions.title]}</h2>
          <button
            onClick={() => {
              deleteResource({ id: resource.id });
            }}
          >
            Delete
          </button>
        </section>
      ))}
    </>
  );
};

export default EditResource;
