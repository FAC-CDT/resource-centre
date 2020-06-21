import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./Login.css";

function SignupForm(props) {
  const [buttonText, setButtonText] = React.useState("Register");

  const handleChange = (e) => {
    const { id, value } = e.target;
    props.setCredentials((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const checkUserInfo = async () => {
    await (
      await fetch(`/.netlify/functions/getUserInfo/getUserInfo.js`, {
        method: "POST",
        body: JSON.stringify(props.credentials.username),
      })
    )
      .json()
      .then((data) => {
        if (!data.records.length) {
          sendDetailsToServer();
        } else {
          alert("Sorry, that username is taken. Please pick another");
          return;
        }
      })
      .catch(console.error);
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

      await fetch(`/.netlify/functions/registerUser/registerUser.js`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            setButtonText("Registering...");
            //alert("Thank you for registering.");
            setTimeout(() => {
              props.history.push("/landing");
            }, 2000);
          } else if (res.status === 206) {
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
      checkUserInfo();
    } else {
      alert("Passwords do not match");
    }
  };
  return (
    <>
      <h1> Sign Up </h1>
      <nav>
        <form>
          <div className="form-inputs">
            <label htmlFor="username">Choose a username:</label>
            <input
              type="text"
              className="input"
              id="username"
              aria-describedby="username"
              placeholder="Enter username"
              value={props.credentials.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="organisation">Whose sessions will you visit?</label>
            <input
              type="text"
              className="input"
              id="organisation"
              placeholder="Enter their initials, e.g. abc"
              value={props.credentials.organisation}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="password">Choose a password:</label>
            <input
              type="password"
              className="input"
              id="password"
              placeholder="Enter password"
              value={props.credentials.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-inputs">
            <label htmlFor="confirmPassword">Confirm your password:</label>
            <input
              type="password"
              className="input"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={props.credentials.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
        </form>
        <article className="account">
          <span>Already have an account? </span>
          <Link to="/" className="link">
            Login here
          </Link>
        </article>
      </nav>
    </>
  );
}

export default withRouter(SignupForm);
