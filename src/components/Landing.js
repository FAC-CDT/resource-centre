import React from "react";
import { Link } from "react-router-dom";
import ParticipantMenu from "./menus/Participant-menu.js";
import StaffMenu from "./menus/Staff-menu.js";

const Menu = ({ userInfo, setUserInfo, credentials }) => {
  const getUserInfo = async () => {
    await (
      await fetch(`/.netlify/functions/getUserInfo/getUserInfo.js`, {
        method: "POST",
        body: JSON.stringify(credentials.username),
      })
    )
      .json()
      .then((data) => {
        setUserInfo({
          organisation: data.records[0].fields.organisation,
          userType: data.records[0].fields.user_type,
          username: data.records[0].fields.username,
        });
      })
      .catch(console.error);
  };

  React.useEffect(() => {
    getUserInfo();
    // eslint-disable-next-line
  }, []);

  if (!userInfo.userType) {
    return <h1>Loading...</h1>;
  }

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
