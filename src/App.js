import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import Error from "./components/Error.js";
import Landing from "./components/Landing.js";
import Session from "./components/session/Session.js";
import Resources from "./components/resources/Resources.js";
import Help from "./components/Help.js";
import AddSession from "./components/staff-options/AddSession.js";
import EditSessions from "./components/staff-options/EditSessions.js";
import AddResource from "./components/staff-options/AddResource.js";
import EditResource from "./components/staff-options/EditResource.js";
import Profile from "./components/staff-options/Profile.js";
import StaffLogin from "./components/login/StaffLogin";
import ParticipantLogin from "./components/login/ParticipantLogin.js";


function App() {

  const [userInfo, setUserInfo] = React.useState({
    username: "",
    password: "",
    organisation: "",
    userType: "participant"
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => <ParticipantLogin userInfo={userInfo} setUserInfo={setUserInfo} />}
        />
        <Route
          exact
          path="/landing"
          render={() => (
            <Landing userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route path="/session" render={() => <Session userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/resources" render={() => <Resources userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/add-session" render={() => <AddSession userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/edit-session" render={() => <EditSessions userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/add-resource" render={() => <AddResource userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/edit-resource" render={() => <EditResource userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/help" render={() => <Help />} />
        <Route path="/stafflogin" render={() => <StaffLogin userInfo={userInfo} setUserInfo={setUserInfo} />} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
