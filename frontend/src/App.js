import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEvent from "./component/EventManagement/AddEvent";
import EditEvent from "./component/EventManagement/EditEvent";
import ViewEvent from "./component/EventManagement/viewEvent";
import EventReport from "./component/EventManagement/EventReport";
import manageEvent from "./component/EventServices/manageEvent";
import Navbar from "./component/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
      <br/>
        <Route exact path="/" component={Dashboard} />
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/editEvent/:id" component={EditEvent} />
        <Route path="/viewEvent" component={ViewEvent} />
        <Route path='/EventReport' component={EventReport} />
        <Route path='/manageEvent' exact component={manageEvent} />
      </div>
    </Router>
  );
}

export default App;
