import React from "react";
import { withRouter, Link } from "react-router-dom";

function SignupForm(props) {
  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const sendDetailsToServer = async () => {
    if (
      props.credentials.username.length &&
      props.credentials.password.length
    ) {
      const payload = {
        username: props.credentials.username,
        password: props.credentials.password,
        organisation: props.credentials.organisation,
      };

      await fetch(`/.netlify/functions/register/register.js`, {
        method: "POST",
        body: JSON.stringify(payload),
      //  headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            props.history.push("/landing");
          } else if (res.status === 406) {
            alert("We can't find that organisation in the database");
          } else {
            alert("A server error ocurred");
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert("Please enter valid username and password");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.credentials.password === props.credentials.confirmPassword) {
      sendDetailsToServer();
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <div className="">
      <form>
        <div className="">
          <label htmlFor="username">Choose a username</label>
          <input
            type="text"
            className=""
            id="username"
            aria-describedby="username"
            placeholder="Enter username"
            value={props.credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="organisation">
            Enter the initials of your organisation
          </label>
          <input
            type="text"
            className=""
            id="organisation"
            placeholder="E.g. nasa"
            value={props.credentials.organisation}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="password">Choose a password</label>
          <input
            type="password"
            className=""
            id="password"
            placeholder="Enter password"
            value={props.credentials.password}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input
            type="password"
            className=""
            id="confirmPassword"
            placeholder="Confirm Password"
            value={props.credentials.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="" onClick={handleSubmit}>
          Register
        </button>
      </form>
      <div className="">
        <span>Already have an account? </span>
        <Link className="" to="/">
          Login here
        </Link>
      </div>
    </div>
  );
}

export default withRouter(SignupForm);
