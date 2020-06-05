import React from "react";
import { Link } from "react-router-dom";
import PipLogo from "./buttons/pip_logo.svg";
import SafhLogo from "./buttons/safh_logo.svg";
import "./OrgLogin.css";

const OrganisationLogin = ({ userRole, setUserOrganisation }) => {
  return (
    <>
      <h1> Welcome! </h1>
      <nav>
        <Link to="/landing" alt="Log in as a participant">
          <img
            src={PipLogo}
            alt="PIP logo"
            className="org-logo"
            onClick={() => {
              setUserOrganisation("pip");
            }}
          />
        </Link>
        <Link to="/landing" alt="Log in as a member of an organisation">
          <img
            src={SafhLogo}
            alt="safh logo"
            className="org-logo"
            onClick={() => {
              setUserOrganisation("safh");
            }}
          />
        </Link>
      </nav>
    </>
  );
};

export default OrganisationLogin;
