import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Participant } from "./buttons/participant-login.svg";
import { ReactComponent as Staff } from "./buttons/staff-login.svg";
import "./Login.css";

const Landing = ({ userRole, setUserRole }) => {
  return (
    <>
      <h1> Welcome! </h1>
      <nav>
        <Link to="/organisationlogin" alt="Log in as a participant">
          <Participant
            onClick={() => {
              setUserRole("participant");
            }}
          />
        </Link>
        <Link
          to="/organisationlogin"
          alt="Log in as a member of an organisation"
        >
          <Staff
            onClick={() => {
              setUserRole("staff");
            }}
          />
        </Link>
      </nav>
    </>
  );
};

export default Landing;
