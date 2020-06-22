import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../login/Login.css";

const AddSessionForm = (props) => {
  const [newSession, setNewSession] = React.useState({
    session_title: "",
    organisation: props.localUserInfo.organisation,
    session_host: "",
    host_image: "",
    session_date: "",
    start_time: "",
    end_time: "",
    resource1_title: "",
    resource1_url: "",
    resource1_category: "",
    resource2_title: "",
    resource2_url: "",
    resource2_category: "",
    resource3_title: "",
    resource3_url: "",
    resource3_category: "",
    resource4_title: "",
    resource4_url: "",
    resource4_category: "",
    staff_resource1_title: "",
    staff_resource1_url: "",
    staff_resource1_category: "",
    staff_resource2_title: "",
    staff_resource2_url: "",
    staff_resource2_category: "",
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
          props.history.push("/add-session");
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
          <label htmlFor="session_title">Choose a title for the Session:</label>
          <input
            required
            type="text"
            className="input"
            id="session_title"
            placeholder="Enter title"
            value={newSession.session_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="session_host">The session host's name:</label>
          <input
            required
            type="text"
            className="input"
            id="session_host"
            placeholder="Enter a name"
            value={newSession.session_host}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="host_image">A link to an image of the host:</label>
          <input
            required
            type="text"
            className="input"
            id="host_image"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.host_image}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="session_date">The session date:</label>
          <input
            type="date"
            id="session_date"
            name="date"
            className="input"
            value={newSession.session_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="start_time">Start time:</label>
          <input
            required
            type="text"
            className="input"
            id="start_time"
            placeholder="E.g. 2:30pm"
            value={newSession.start_time}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="end_time">End time:</label>
          <small>Please keep the same format as the start time.</small>
          <input
            required
            type="text"
            className="input"
            id="end_time"
            placeholder="E.g. 3:30pm"
            value={newSession.end_time}
            onChange={handleChange}
          />
        </div>
        <h2>Participant Resource 1</h2>
        <div className="form-inputs">
          <label htmlFor="resource1_title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource1_title"
            placeholder="Enter title"
            value={newSession.resource1_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource1_url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource1_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource1_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource1_category">Select a category:</label>
          <select
            name="categories"
            id="resource1_category"
            value={newSession.resource1_category}
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
          <label htmlFor="resource2_title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource2_title"
            placeholder="Enter title"
            value={newSession.resource2_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource2_url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource2_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource2_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource2_category">Select a category:</label>
          <select
            name="categories"
            id="resource2_category"
            value={newSession.resource2_category}
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
          <label htmlFor="resource3_title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource3_title"
            placeholder="Enter title"
            value={newSession.resource3_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource3_url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource3_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource3_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource3_category">Select a category:</label>
          <select
            name="categories"
            id="resource3_category"
            value={newSession.resource3_category}
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
          <label htmlFor="resource4_title">The title of this resource:</label>
          <input
            required
            type="text"
            className="input"
            id="resource4_title"
            placeholder="Enter title"
            value={newSession.resource4_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource4_url">The link the resource points to:</label>
          <input
            required
            type="text"
            className="input"
            id="resource4_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.resource4_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource4_category">Select a category:</label>
          <select
            name="categories"
            id="resource4_category"
            value={newSession.resource4_category}
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
          <label htmlFor="staff_resource1_title">
            The title of this resource:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staff_resource1_title"
            placeholder="Enter title"
            value={newSession.staff_resource1_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource1_url">
            The link the resource points to:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staff_resource1_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.staff_resource1_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource1_category">Select a category:</label>
          <select
            name="categories"
            id="staff_resource1_category"
            value={newSession.staff_resource1_category}
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
          <label htmlFor="staff_resource2_title">
            The title of this resource:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staff_resource2_title"
            placeholder="Enter title"
            value={newSession.staff_resource2_title}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource2_url">
            The link the resource points to:
          </label>
          <input
            required
            type="text"
            className="input"
            id="staff_resource2_url"
            placeholder="E.g. https://images.com/me.jpg"
            value={newSession.staff_resource2_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource2_category">Select a category:</label>
          <select
            name="categories"
            id="staff_resource2_category"
            value={newSession.staff_resource2_category}
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
