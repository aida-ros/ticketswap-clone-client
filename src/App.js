import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import EventsListContainer from './components/EventsListContainer'
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <div className="routes">
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <h1>Welcome!</h1>
      <Route exact path="/login" component={LoginContainer} />
      {/* <Route exact path="/signup" component={...} /> */}
      <Route exact path="/events" component={EventsListContainer} />
      {/* <Route exact path="/events/:id" component={...} /> */}
      {/* <Route exact path="/tickets/:id" component={...} /> */}
    </div>
  );
}

export default App;
