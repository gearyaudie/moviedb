import React from "react";
import { MoviesApi } from "./components/MoviesApi";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <MoviesApi />
    </Provider>
  );
}

export default App;
