import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./ParticipantLogin.css";

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
      <form>
        <div className="">
          <label htmlFor="username">Please enter your name:</label>
          <input
            required="required"
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
          <label htmlFor="organisation">Select your organisation:</label>
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
