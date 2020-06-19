import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../login/Login.css";

const EditSession = (props) => {
  const resourceId = props.location.search.split("=")[1];

  const [currentFields, setCurrentFields] = React.useState(null);
  const [currentId, setCurrentId] = React.useState("");

  const getEditResource = async () => {
    await (
      await fetch(
        `/.netlify/functions/getResourceToEdit/getResourceToEdit.js`,
        {
          method: "POST",
          body: JSON.stringify({ id: resourceId }),
        }
      )
    )
      .json()
      .then((data) => {
        setCurrentFields(data.records[0].fields);
        setCurrentId(data.records[0].id);
      })
      .catch(console.error);
  };

  React.useEffect(() => {
    getEditResource();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCurrentFields((prevState) => ({
      ...prevState,
      [id]: value,
      resourceId: currentId,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/.netlify/functions/editResource/editResource.js`, {
      method: "POST",
      body: JSON.stringify(currentFields),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Your resource was successfully updated");
          props.history.push("/edit-resource");
        } else {
          alert("There was an error, please try again");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  if (!currentFields) {
    return (
      <article>
        <Navbar />
        <h1>Loading...</h1>
      </article>
    );
  }

  return (
    <>
      <Navbar />
      <h1>Edit Resource</h1>
      <p>Please update any fields as required.</p>
      <form>
        <div className="form-inputs">
          <label htmlFor="resource_title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource_title"
            placeholder="Enter title"
            value={currentFields.resource_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource_url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={currentFields.resource_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource_category">Select a category:</label>
          <select
            name="categories"
            id="resource_category"
            value={currentFields.resource_category}
            onChange={handleChange}
          >
            <option value="">Click here to select</option>
            <option value="pdf">PDF</option>
            <option value="zoom">Zoom</option>
            <option value="sharepoint">Sharepoint</option>
            <option value="website">Website</option>
            <option value="youtube">Youtube</option>
            <option value="google">Google</option>
            <option value="coronavirus">Coronavirus</option>
            <option value="other">Other</option>
            <option value="image">Image</option>
            <option value="slideshow">Slideshow</option>
          </select>
        </div>

        <button className="submit-button" type="submit" onClick={handleSubmit}>
          Update Resource
        </button>
      </form>
    </>
  );
};

export default withRouter(EditSession);
