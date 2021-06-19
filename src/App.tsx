import React from "react";
import { MoviesApi } from "./components/MoviesApi";
import { Navbar } from "./components/shared/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MoviesApi} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
