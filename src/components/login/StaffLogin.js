import React from "react";
import { withRouter } from "react-router-dom";
import "./StaffLogin.css";

const StaffLogin = (props) => {

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {

    }

  return (
    <div className="staff-login-form">
      <h1>Staff Login</h1>
      <form>
        <div className="">
          <label htmlFor="username">Please enter your username</label>
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
          <label htmlFor="password">Enter password</label>
          <input
            type="password"
            className=""
            id="password"
            placeholder="Password"
            value={props.userInfo.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-check"></div>
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
