import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import '../login/Login.css';

const AddResourceForm = (props) => {
  const [newResource, setNewResource] = React.useState({
    title: "",
    category: "",
    url: "",
    organisation: props.localUserInfo.organisation,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewResource((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newResource.title && newResource.category && newResource.url) {
      await fetch(`/.netlify/functions/addResource/addResource.js`, {
        method: "POST",
        body: JSON.stringify(newResource),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Your resource was successfully added");
            props.history.push("/add-resource");
          } else {
            alert("There was an error, please try again");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert("Please fill in all the information fields");
    }
  };

  return (
    <>
    <Navbar />
      <h1>Add a Resource</h1>
      <p>Please fill in all the fields.</p>
      <form>
        <div className="form-inputs">
          <label htmlFor="title">Choose a title for the resource:</label>
          <input
            required
            type="text"
            className="input"
            id="title"
            placeholder="Enter title"
            value={newResource.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="url">What is the resource's web address?</label>
          <input
            required
            type="text"
            className="input"
            id="url"
            placeholder="E.g. https://google.com"
            value={newResource.url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="category">Select a category:</label>
          <select
            name="categories"
            id="category"
            value={newResource.category}
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
          Add resource
        </button>
      </form>
    </>
  );
};

export default withRouter(AddResourceForm);
