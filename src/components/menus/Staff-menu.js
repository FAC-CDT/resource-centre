import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddSession } from "./icons/add-sess.svg";
import { ReactComponent as SessionsList } from "./icons/edit-sess.svg";
import { ReactComponent as AddResource } from "./icons/add-res.svg";
import { ReactComponent as EditResource } from "./icons/edit-res.svg";
import { ReactComponent as CurrentSession } from "./icons/current-sess.svg";
import { ReactComponent as Profile } from "./icons/profile.svg";

import "./Staff-menu.css";

const StaffMenu = ({ userInfo, setUserInfo }) => {

	const handleLogout = () => {
		setUserInfo ({
		username: "",
		password: "",
		organisation: "",
		userType: "participant"
		})
		console.log(userInfo)
	  }

  return (
    <section>
      <h1>Welcome {userInfo.username || userInfo.organisation}</h1>
      <section className="staff-options">
        <Link to="/add-session">
          <AddSession />
        </Link>
        <Link to="/edit-session">
          <SessionsList />
        </Link>
        <Link to="/add-resource">
          <AddResource />
        </Link>
        <Link to="/edit-resource">
          <EditResource />
        </Link>
        <Link to="/session">
          <CurrentSession />
        </Link>
        <Link to="/profile">
          <Profile />
        </Link>
      </section>
      <Link to="/" className="logout" onClick={handleLogout}>
        Log out
      </Link>
    </section>
  );
};

export default StaffMenu;
