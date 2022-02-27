import './App.css';
import Navbar from './components/Navbar';
import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
function App() {
 
  return (
    <>
    {/* router is used to choose between components */}
    <Navbar></Navbar>
    <Router>
      <Switch>
    <Route exact path="/">
    </Route>
    <Route exact path="/form">
      {/* <h1>HI</h1> */}
      <LoginForm />
    </Route>
    </Switch>
    </Router>
    <Footer></Footer>
    </>
  );
}

export default App;
