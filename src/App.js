import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
import CreateEventContainer from './components/CreateEventContainer'
import LoginContainer from './components/LoginContainer';

function App() {
  return (
    <div className="routes">
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      
      <Route exact path="/login" component={LoginContainer} />
      {/* <Route exact path="/signup" component={...} /> */}
      <Route exact path="/events" component={EventsListContainer} />
      <Route exact path="/create" component={CreateEventContainer} />

      <Route exact path="/events/:id" component={EventDetailsContainer} />
      {/* <Route exact path="/tickets/:id" component={...} /> */}
    </div>
  );
}

export default App;
