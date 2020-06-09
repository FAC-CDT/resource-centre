import React from "react";
import { withRouter } from "react-router-dom";
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

    await fetch(`/.netlify/functions/checkCredentials/checkCredentials.js`, {
      method: "POST",
      body: JSON.stringify(props.userInfo),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
      //console.log({response})
      //  response.json().then((data) => {
            console.log('got data back:', res)
          if (res.status === 200) {
            props.history.push('/landing');
          } else if (res.status === 204) {
            alert("Username and password do not match");
          } else {
            alert("Username does not exist");
          }
        })
     // )
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="staff-login-form">
      <h1>Staff Login</h1>
      <form>
        <div className="">
          <label htmlFor="username">Please enter your username:</label>
          <input
            required
            type="text"
            className=""
            id="username"
            aria-describedby="emailHelp"
            placeholder="Username"
            value={props.userInfo.username}
            onChange={handleChange}
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

          <input
            className="hidden-input"
            type="text"
            id="organisation"
            value={props.userInfo.username}
            onChange={handleChange}
          />

          <input
            disabled
            className="hidden-input"
            type="text"
            id="userType"
            value="staff"
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default withRouter(StaffLogin);
