import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as AddSession } from "./icons/add-sess.svg";
import { ReactComponent as SessionsList } from "./icons/edit-sess.svg";
import { ReactComponent as AddResource } from "./icons/add-res.svg";
import { ReactComponent as EditResource } from "./icons/edit-res.svg";
import { ReactComponent as Session } from "./icons/session.svg";
import "./Staff-menu.css";

const StaffMenu = ({ userInfo, setUserInfo }) => {
  const handleLogout = () => {
    setUserInfo({
      organisation: "",
      userType: "",
      username: ""
    });
  };

  return (
    <>
    <section>
      <h1>Welcome, {userInfo.organisation.toUpperCase()}</h1>
      <section className="staff-options">
        <Link to="/add-session">
          <AddSession />
        </Link>
        <Link to="/list-sessions">
          <SessionsList />
        </Link>
        <Link to="/add-resource">
          <AddResource />
        </Link>
        <Link to="/list-resources">
          <EditResource />
        </Link>
        </section>
        <section className="staff-sess">
        <Link to="/join-session">
          <Session />
        </Link>

      <Link to="/" className="logout" onClick={handleLogout}>
        Log out
      </Link>
      </section>
      </section>
    </>
  );
};

export default StaffMenu;
