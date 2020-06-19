import React from "react";
import { Link } from "react-router-dom";
import ParticipantMenu from "./menus/Participant-menu.js";
import StaffMenu from "./menus/Staff-menu.js";

const Menu = ({ userInfo, setUserInfo, credentials, localUserInfo }) => {

  const getUserInfo = async () => {
    await (await fetch(`/.netlify/functions/getUserInfo/getUserInfo.js`, {
      method: "POST",
      body: JSON.stringify(credentials.username)
    }))
      .json()
      .then(data => {
        

        setUserInfo({
          userType: data.records[0].fields.user_type,
          organisation: data.records[0].fields.organisation,
          username: data.records[0].fields.username
        });

      })
      .catch(console.error);
  };

  React.useEffect(() => {
    if (credentials.username) getUserInfo();
    else return;
    // eslint-disable-next-line
  }, []);

  if (!localUserInfo.userType) {
    return <h1>Loading...</h1>;
  }

  console.log("this is local user info", localUserInfo);

  if (localUserInfo.userType === "staff") {
    return <StaffMenu userInfo={userInfo} setUserInfo={setUserInfo} localUserInfo={localUserInfo}/>;
  } else if (localUserInfo.userType === "participant") {
    return <ParticipantMenu userInfo={userInfo} setUserInfo={setUserInfo} localUserInfo={localUserInfo}/>;
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
