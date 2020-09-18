import React from "react";
//InitialState: what the data looks like in the begin
//Reducer is how we manipulate with the data
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { StateProvider } from "./component/StateProvider";
import reducer, { initialState } from "./component/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/**Data Layer is so that every component con get access to the data layer, therefore if we push information in we can pull it out back */}

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
