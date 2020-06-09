import React from "react";
import { Link } from "react-router-dom";
import ParticipantMenu from "./menus/Participant-menu.js";
import StaffMenu from "./menus/Staff-menu.js";

const Menu = ({ userInfo, setUserInfo }) => {
  if (userInfo.userType === "staff") {
    return <StaffMenu userInfo={userInfo} setUserInfo={setUserInfo} />;
  } else if (userInfo.userType === "participant") {
    return <ParticipantMenu userInfo={userInfo} setUserInfo={setUserInfo} />;
  } else
    return (
      <section>
        <h1>401 error: Unauthorized</h1>
        <Link to="/">
          <button>Back to the homepage</button>
        </Link>
      </section>
    );
};

export default Menu;
