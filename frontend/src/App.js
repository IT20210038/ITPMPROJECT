import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEvent from "./component/EventManagement/AddEvent";
import EditEvent from "./component/EventManagement/EditEvent";
import ViewEvent from "./component/EventManagement/viewEvent";
import EventReport from "./component/EventManagement/EventReport";
import manageEvent from "./component/EventServices/manageEvent";

function App() {
  return (
    <Router>
      <div>
        <Route path="/addEvent" component={AddEvent} />
        <Route path="/editEvent/:id" component={EditEvent} />
        <Route path="/viewEvent" component={ViewEvent} />
        <Route path='/EventReport' component={EventReport} />
        <Route path='/' exact component={manageEvent} />
      </div>
    </Router>
  );
}

export default App;
