import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// screens
// import { Auth } from "./components/Auth";
import { DashboardScreen } from "./screens/DashboardScreen";
import { LoginScreen } from "./screens/LoginScreen";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/dashboard" component={DashboardScreen} />
          <Route exact path="/login" component={LoginScreen} />
          {/* <Route exact path="/" component={} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
