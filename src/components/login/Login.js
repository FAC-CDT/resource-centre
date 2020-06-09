import React from "react";
import { withRouter, Link } from "react-router-dom";
import { ReactComponent as Participant } from "./buttons/participant-login.svg";
import { ReactComponent as Staff } from "./buttons/staff-login.svg";
import "./Login.css";

const Landing = (props) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setUserInfo((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.history.push("/landing");
  };

  return (
    <>
      <h1> Welcome! </h1>
      <nav>
        <Link to="/organisationlogin" alt="Log in as a participant">
          <Participant
            onClick={() => {
              props.setUserRole("participant");
            }}
          />
        </Link>
        <Link
          to="/organisationlogin"
          alt="Log in as a member of an organisation"
        >
          <Staff
            onClick={() => {
              props.setUserRole("staff");
            }}
          />
        </Link>
      
      <form>
        <div className="">
          <label htmlFor="username">Please enter your name</label>
          <input
            type="text"
            className=""
            id="username"
            aria-describedby="emailHelp"
            placeholder="Type here"
            value={props.userInfo.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-group text-left">
          <label htmlFor="organisation">Select your organisation</label>
          <select required name="organisation" id="organisation" onChange={handleChange}>
            <option >Select an option</option>
            <option value="pip">PIP</option>
            <option value="safh">SAFH</option>
          </select>
        </div>
        <div className=""></div>
        <button type="submit" className="" onClick={handleSubmit}>
          Enter
        </button>
      </form>
      <Link to="/stafflogin">Staff Login</Link>
      </nav>
    </>
  );
};

export default withRouter(Landing);
