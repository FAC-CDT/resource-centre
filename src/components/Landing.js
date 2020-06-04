import React from "react";
import { Link } from "react-router-dom";
import ParticipantMenu from "./menus/Participant-menu.js";
import StaffMenu from "./menus/Staff-menu.js";

const Menu = ({ userRole, userOrganisation }) => {
  if (userRole === "staff") {
    return <StaffMenu userRole={userRole} userOrganisation={userOrganisation} />;
  } else if (userRole === "participant") {
    return <ParticipantMenu userRole={userRole} userOrganisation={userOrganisation} />;
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
