import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Session } from "./icons/session.svg";
import { ReactComponent as Resources } from "./icons/resources.svg";
import { ReactComponent as Help } from "./icons/help.svg";
import "./Participant-menu.css";

const ParticipantMenu = ({ userInfo, setUserInfo }) => {

  const handleLogout = () => {
    setUserInfo ({
    organisation: "",
    userType: "",
    username: ""
    })
  }

  return (
    <section>
      <h1>Welcome {userInfo.username}</h1>
      <section className="user-options">
        <Link to="/session">
          <Session />
        </Link>
        <Link to="/resources">
          <Resources />
        </Link>
        <Link to="/help">
          <Help />
        </Link>
        <Link to="/" onClick={handleLogout} className="logout">Log out</Link>
      </section>
    </section>
  );
};

export default ParticipantMenu;
