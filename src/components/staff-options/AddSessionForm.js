import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../login/Login.css";

const AddSessionForm = (props) => {
  const [newSession, setNewSession] = React.useState({
    title: "",
    organisation: props.localUserInfo.organisation,
    hostName: "",
    hostImage: "",
    date: "",
    startTime: "",
    endTime: "",
    resource1Title: "",
    resource1Url: "",
    resource1Category: "",
    resource2Title: "",
    resource2Url: "",
    resource2Category: "",
    resource3Title: "",
    resource3Url: "",
    resource3Category: "",
    resource4Title: "",
    resource4Url: "",
    resource4Category: "",
    staffResource1Title: "",
    staffResource1Url: "",
    staffResource1Category: "",
    staffResource2Title: "",
    staffResource2Url: "",
    staffResource2Category: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewSession((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/.netlify/functions/addSession/addSession.js`, {
      method: "POST",
      body: JSON.stringify(newSession),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Your Session was successfully added");
          props.history.push("/add-Session");
        } else {
          alert("There was an error, please try again");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <Navbar />
      <h1>Add Session</h1>
      <p>Please fill in any fields that are required.</p>
      <form>
        <div className="form-inputs">
          <label htmlFor="title">Choose a title for the Session:</label>
          <input
            required
            type="text"
            className="input"
            id="title"
            placeholder="Enter title"
            value={newSession.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="hostName">The session host's name:</label>
          <input
            required
            type="text"
            className="input"
            id="hostName"
            placeholder="Enter a name"
            value={newSession.hostName}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="hostImage">A link to an image of the host:</label>
          <input
            required
            type="text"
            className="input"
            id="hostImage"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.hostImage}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="date">The session date:</label>
          <input
            type="date"
            id="date"
            name="date"
            className="input"
            value={newSession.date}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="startTime">Start time:</label>
          <input
            required
            type="text"
            className="input"
            id="startTime"
            placeholder="E.g. 2:30pm"
            value={newSession.startTime}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="endTime">End time:</label>
          <small>Please keep the same format as the start time.</small>
          <input
            required
            type="text"
            className="input"
            id="endTime"
            placeholder="E.g. 3:30pm"
            value={newSession.endTime}
            onChange={handleChange}
          />
        </div>
        <h2>Participant Resource 1</h2>
        <div className="form-inputs">
          <label htmlFor="resource1Title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource1Title"
            placeholder="Enter title"
            value={newSession.resource1Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource1Url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource1Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource1Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource1Category">Select a category:</label>
          <select
            name="categories"
            id="resource1Category"
            value={newSession.resource1Category}
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
        <h2>Participant Resource 2</h2>
        <div className="form-inputs">
          <label htmlFor="resource2Title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource2Title"
            placeholder="Enter title"
            value={newSession.resource2Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource2Url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource2Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource2Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource2Category">Select a category:</label>
          <select
            name="categories"
            id="resource2Category"
            value={newSession.resource2Category}
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
        <h2>Participant Resource 3</h2>
        <div className="form-inputs">
          <label htmlFor="resource3Title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource3Title"
            placeholder="Enter title"
            value={newSession.resource3Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource3Url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource3Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource3Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource3Category">Select a category:</label>
          <select
            name="categories"
            id="resource3Category"
            value={newSession.resource3Category}
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
        <h2>Participant Resource 4</h2>
        <div className="form-inputs">
          <label htmlFor="resource4Title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource4Title"
            placeholder="Enter title"
            value={newSession.resource4Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource4Url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource4Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource4Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource4Category">Select a category:</label>
          <select
            name="categories"
            id="resource4Category"
            value={newSession.resource4Category}
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
        <h2>Staff Only Resource 1</h2>
        <div className="form-inputs">
          <label htmlFor="staffResource1Title">
            The title of this resource:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staffResource1Title"
            placeholder="Enter title"
            value={newSession.staffResource1Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staffResource1Url">
            The link the resource points to:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staffResource1Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.staffResource1Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staffResource1Category">Select a category:</label>
          <select
            name="categories"
            id="staffResource1Category"
            value={newSession.staffResource1Category}
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

        <h2>Staff Only Resource 2</h2>
        <div className="form-inputs">
          <label htmlFor="staffResource2Title">
            The title of this resource:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staffResource2Title"
            placeholder="Enter title"
            value={newSession.staffResource2Title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staffResource2Url">
            The link the resource points to:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staffResource2Url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.staffResource2Url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staffResource2Category">Select a category:</label>
          <select
            name="categories"
            id="staffResource2Category"
            value={newSession.staffResource2Category}
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
          Add Session
        </button>
      </form>
    </>
  );
};

export default withRouter(AddSessionForm);
