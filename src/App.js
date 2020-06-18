import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import "./App.css";

import Error from "./components/Error.js";
import Landing from "./components/Landing.js";
import Session from "./components/session/Session.js";
import Resources from "./components/resources/Resources.js";
import Help from "./components/help/Help.js";
import AddSession from "./components/staff-options/AddSessionForm.js";
import SessionsList from "./components/staff-options/SessionsList.js";
import AddResource from "./components/staff-options/AddResourceForm.js";
import ResourceList from "./components/staff-options/resourceList.js";
import Profile from "./components/staff-options/Profile.js";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import EditSession from "./components/staff-options/EditSession";

function App() {
  const [userInfo, setUserInfo] = React.useState(
    JSON.parse(sessionStorage.getItem("userInfoInLocalStorage")) || {
      organisation: "",
      userType: "",
    }
  );

  React.useEffect(() => {
    sessionStorage.setItem("userInfoInLocalStorage", JSON.stringify(userInfo));
  }, [userInfo]);

  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
    confirmPassword: "",
    organisation: "",
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Login
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              credentials={credentials}
              setCredentials={setCredentials}
            />
          )}
        />
        <Route
          path="/register"
          render={() => (
            <Register
              setCredentials={setCredentials}
              credentials={credentials}
            />
          )}
        />
        <Route
          exact
          path="/landing"
          render={() => (
            <Landing
              userInfo={userInfo}
              setUserInfo={setUserInfo}
              credentials={credentials}
            />
          )}
        />
        <Route
          path="/session"
          render={() => (
            <Session userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/resources"
          render={() => (
            <Resources userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/add-session"
          render={() => (
            <AddSession userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/list-sessions"
          render={() => (
            <SessionsList userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/add-resource"
          render={() => (
            <AddResource userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/list-resources"
          render={() => (
            <ResourceList userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route
          path="/edit-session"
          render={() => (
            <EditSession userInfo={userInfo} setUserInfo={setUserInfo} />
          )}
        />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/help" render={() => <Help />} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
