import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../login/Login.css";

const EditSession = (props) => {
  const sessionId = props.location.search.split("=")[1];

  const [currentFields, setCurrentFields] = React.useState(null);
  const [currentId, setCurrentId] = React.useState("");

  const getEditSession = async () => {
    await (
      await fetch(`/.netlify/functions/getSessionToEdit/getSessionToEdit.js`, {
        method: "POST",
        body: JSON.stringify({ id: sessionId }),
      })
    )
      .json()
      .then((data) => {
          setCurrentFields(data.records[0].fields);
        setCurrentId(data.records[0].id)
        })
      .catch(console.error);
  };

  React.useEffect(() => {
    getEditSession();
    // eslint-disable-next-line
  }, []);

  //   const [newSession, setNewSession] = React.useState({
  //     title: "",
  //     organisation: props.userInfo.organisation,
  //     hostName: "",
  //     hostImage: "",
  //     date: "",
  //     startTime: "",
  //     endTime: "",
  //     resource1Title: "",
  //     resource1Url: "",
  //     resource1Category: "",
  //     resource2Title: "",
  //     resource2Url: "",
  //     resource2Category: "",
  //     resource3Title: "",
  //     resource3Url: "",
  //     resource3Category: "",
  //     resource4Title: "",
  //     resource4Url: "",
  //     resource4Category: "",
  //     staffResource1Title: "",
  //     staffResource1Url: "",
  //     staffResource1category: "",
  //     staffResource2Title: "",
  //     staffResource2Url: "",
  //     staffResource2category: "",
  //   });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCurrentFields((prevState) => ({
      ...prevState,
      [id]: value,
     sessionId: currentId
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`/.netlify/functions/editSession/editSession.js`, {
      method: "POST",
      body: JSON.stringify(currentFields),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Your Session was successfully updated");
          props.history.push("/edit-Session");
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
      <h1>Edit Session</h1>
      <p>Please update any fields as required.</p>
      <form>
        <div className="form-inputs">
          <label htmlFor="session_title">Choose a title for the Session:</label>
          <input
            required
            type="text"
            className="input"
            id="session_title"
            placeholder="Enter title"
            value={currentFields.session_title}
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
            value={currentFields.session_host}
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
            value={currentFields.host_image}
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
            value={currentFields.session_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="start_time">Start time:</label>
          <input
            required
            type="text"
            className="input"
            id="start-time"
            placeholder="E.g. 2:30pm"
            value={currentFields.start_time}
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
            value={currentFields.end_time}
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
            value={currentFields.resource1_title}
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
            value={currentFields.resource1_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource1_category">Select a category:</label>
          <select
            name="categories"
            id="resource1_category"
            value={currentFields.resource1_category}
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
            value={currentFields.resource2_title}
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
            value={currentFields.resource2_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource2_category">Select a category:</label>
          <select
            name="categories"
            id="resource2_category"
            value={currentFields.resource2_category}
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
            value={currentFields.resource3_title}
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
            value={currentFields.resource3_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource3_category">Select a category:</label>
          <select
            name="categories"
            id="resource3_category"
            value={currentFields.resource3_category}
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
            value={currentFields.resource4_title}
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
            value={currentFields.resource4_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="resource4_category">Select a category:</label>
          <select
            name="categories"
            id="resource4_category"
            value={currentFields.resource4_category}
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
            value={currentFields.staff_resource1_title}
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
            value={currentFields.staff_resource1_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource1_category">Select a category:</label>
          <select
            name="categories"
            id="staff_resource1_category"
            value={currentFields.staff_resource1_category}
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
            value={currentFields.staff_resource2_title}
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
            value={currentFields.staff_resource2_url}
            onChange={handleChange}
          />
        </div>
        <div className="form-inputs">
          <label htmlFor="staff_resource2_category">Select a category:</label>
          <select
            name="categories"
            id="staff_resource2_category"
            value={currentFields.staff_resource2_category}
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

        <button type="submit" onClick={handleSubmit}>
          Update Session
        </button>
      </form>
    </>
  );
};

export default withRouter(EditSession);
