import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./StaffLogin.css";

const StaffLogin = (props) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
      userType: "staff",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (props.userInfo.organisation && props.userInfo.password) {
      await fetch(`/.netlify/functions/checkCredentials/checkCredentials.js`, {
        method: "POST",
        body: JSON.stringify(props.userInfo),
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
    <div className="staff-login-form">
      <h1>Staff Login</h1>
      <form>
        <div className="">
          <label htmlFor="organisation">Please enter your Organisation:</label>
          <input
            required
            type="text"
            className=""
            id="organisation"
            aria-describedby="emailHelp"
            placeholder="Organisation"
            value={props.userInfo.organisation}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div className="">
          <label htmlFor="password">Enter password:</label>
          <input
            required
            type="password"
            className=""
            id="password"
            placeholder="Password"
            value={props.userInfo.password}
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
      <Link to="/">Participant Login</Link>
    </div>
  );
};

export default withRouter(StaffLogin);
