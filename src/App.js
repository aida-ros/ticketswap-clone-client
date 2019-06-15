import React from 'react';
import './App.css';
import { Route, Redirect } from "react-router-dom";
import EventsListContainer from './components/EventsListContainer'
import EventDetailsContainer from './components/EventDetailsContainer'
import CreateEventContainer from './components/CreateEventContainer'
import CreateTicketContainer from './components/CreateTicketContainer'
import LoginContainer from './components/LoginContainer';
import SignUpContainer from './components/SignUpContainer'
import TicketDetailsContainer from './components/TicketDetailsContainer';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="routes">
       {/* <CssBaseline /> */}
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      
      <Route exact path="/login" component={LoginContainer} />
      <Route exact path="/signup" component={SignUpContainer} />
      
      <Route exact path="/events" component={EventsListContainer} />
      <Route exact path="/create/event" component={CreateEventContainer} />
      <Route exact path="/create/ticket" component={CreateTicketContainer} />

      <Route exact path="/events/:id" component={EventDetailsContainer} />
      <Route exact path="/events/:id/tickets/:id" component={TicketDetailsContainer} />
    </div>
  );
}

export default App;
