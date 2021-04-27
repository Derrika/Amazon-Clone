import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import Checkout from "./component/checkout/Checkout";
import Login from "./component/Login/Login";
import Payment from "./component/Basket/Payment";
import Orders from "./component/Basket/Orders";
import { authorize } from "./firebase";
import { useStateValue } from "./component/StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";


const promise = loadStripe("pk_test_Mb5tRbIEI9v0UDIuH7HAEwIn00p6hvLVIr");

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads....

    authorize.onAuthStateChanged((authorizeUser) => {
      console.log("THE USER US >>>", authorizeUser);

      if (authorizeUser) {
        //the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authorizeUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // BEM Convention
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
