import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.js";
import Error from "./components/Error.js";
import Landing from "./components/Landing.js";
import Session from "./components/Session.js";
import Resources from "./components/resources/Resources.js";
import Help from "./components/Help.js";

import AddSession from "./components/staff-options/AddSession.js";
import EditSessions from "./components/staff-options/EditSessions.js";
import AddResource from "./components/staff-options/AddResource.js";
import EditResource from "./components/staff-options/EditResource.js";
import Profile from "./components/staff-options/Profile.js";
import OrganisationLogin from "./components/login/OrganisationLogin";

function App() {
  const [userRole, setUserRole] = React.useState("No role");
  const [userOrganisation, setUserOrganisation] = React.useState(
    "No organisation"
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          render={() => <Login userRole={userRole} setUserRole={setUserRole} />}
        />
        <Route
          exact path="/landing"
          render={() => <Landing userRole={userRole} userOrganisation={userOrganisation} />}
        />
        <Route exact path="/organisationlogin" render={() => <OrganisationLogin userOrganisation={userOrganisation} setUserOrganisation={setUserOrganisation} />} />
        <Route path="/session" render={() => <Session />} />
        <Route path="/resources" render={() => <Resources />} />
        <Route path="/add-session" render={() => <AddSession />} />
        <Route path="/edit-session" render={() => <EditSessions />} />
        <Route path="/add-resource" render={() => <AddResource />} />
        <Route path="/edit-resource" render={() => <EditResource />} />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/help" render={() => <Help />} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
