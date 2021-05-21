import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

const App = () => { 
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <RegisterPage />
        </Route>

        <Route path="/login" exact>
          <LoginPage />
        </Route>

        <Route path="/">Page not found</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
