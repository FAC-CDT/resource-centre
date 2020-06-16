import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.css";

const StaffLogin = (props) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.credentials.username && props.credentials.password) {
      await fetch(`/.netlify/functions/checkCredentials/checkCredentials.js`, {
        method: "POST",
        body: JSON.stringify(props.credentials),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            props.history.push("/landing");
          } else if (res.status === 204) {
            alert("Username and password do not match");
          } else {
            alert("Username does not exist");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert("Please fill in all the login fields");
    }
  };

  return (
<>
      <h1>Hello, welcome!</h1>
    <nav>
      <form>
        <div className="">
          <label htmlFor="username" className="username">Enter your username:</label>
          <input
            required
            type="text"
            className="input"
            id="username"
            placeholder="Username"
            value={props.credentials.username}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">Enter password:</label>
          <input
            required
            type="password"
            className="input"
            id="password"
            placeholder="Password"
            value={props.credentials.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className=""
          onClick={handleSubmit}
        >
          Log in
        </button>
      </form>
     <Link to="/register" className="part-login">Register</Link>
    </nav>
    </>
  );
};

export default withRouter(StaffLogin);
