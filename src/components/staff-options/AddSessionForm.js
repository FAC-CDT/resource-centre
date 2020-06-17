import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "../login/Login.css";

const AddSessionForm = (props) => {
  let resourceCount = [1, 2, 3, 4];
  let staffResourceCount = [1, 2];

  const [newSession, setNewSession] = React.useState({
    title: "",
    organisation: props.userInfo.organisation,
    hostName: "",
    hostImage: "",
    date: "",
    startTime: "",
    endTime: "",
    resources: {
    //   1: {
    //     title: "",
    //     url: "",
    //     category: "",
    //   },
    //   2: {
    //     title: "",
    //     url: "",
    //     category: "",
    //   },
    //   3: {
    //     title: "",
    //     url: "",
    //     category: "",
    //   },
    //   4: {
    //     title: "",
    //     url: "",
    //     category: "",
    //   }
    },
    staffResources: {
        1: {
          title: "",
          url: "",
          category: "",
        },
        2: {
          title: "",
          url: "",
          category: "",
        },
      },
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNewSession((prevState) => ({
      ...prevState,
      [id]: value,
    }));
    console.log(newSession);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newSession.title && newSession.category && newSession.url) {
      await fetch(`/.netlify/functions/addSession/addSession.js`, {
        method: "POST",
        body: JSON.stringify(newSession),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            alert("Your Session was successfully added");
            props.history.push("/adSession");
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
      <h1>Add Session</h1>
      <p>Please fill in all the fields.</p>
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
        {resourceCount.map((num) => {
          return (
            <div className="form-inputs" key={num}>
              <h2>Participant Resource {num}</h2>
              <div className="form-inputs">
                <label htmlFor="resourceTitle">
                  The title of this resource:
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id={num}
                  placeholder="Enter title"
                  value={newSession[num].title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="resourceUrl">
                  The link the resource points to:
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id={num}
                  placeholder="E.g. https://images.com/me.jpg"
                  value={newSession[num].url}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="category">Select a category:</label>
                <select
                  name="categories"
                  id={num}
                  value={newSession[num].category}
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
            </div>
          );
        })}
        {staffResourceCount.map((num) => {
          return (
            <div className="form-inputs" key={num}>
              <h2>Staff Only Resource {num}</h2>
              <div className="form-inputs">
                <label htmlFor="resourceTitle">
                  The title of this resource:
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id={`staffResources.${num}.title`}
                  placeholder="Enter title"
                  value={[num].title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="resourceUrl">
                  The link the resource points to:
                </label>
                <input
                  required
                  type="text"
                  className="input"
                  id={`staffResources.${num}.url`}
                  placeholder="E.g. https://images.com/me.jpg"
                  value={[num].url}
                  onChange={handleChange}
                />
              </div>
              <div className="form-inputs">
                <label htmlFor="category">Select a category:</label>
                <select
                  name="categories"
                  id={`staffResources.${num}.category`}
                  value={[num].category}
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
            </div>
          );
        })}
        <button type="submit" onClick={handleSubmit}>
          Add Session
        </button>
      </form>
    </>
  );
};

export default withRouter(AddSessionForm);
