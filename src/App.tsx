import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
// import { Auth } from "./components/Auth";
import { DashboardScreen } from "./screens/DashboardScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { IndexPage } from "./pages/index";

// components
import { CurrentUser } from "./components/CurrentUser";

function App() {
  return (
    <div>
      <CurrentUser />
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
