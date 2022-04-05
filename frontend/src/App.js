import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddEvent from "./component/EventManagement/AddEvent";
import EditEvent from "./component/EventManagement/EditEvent";
import ViewEvent from "./component/EventManagement/viewEvent";
//import events from "./component/EventManagement/AddEvent";
//import AddRooms from "./component/RoomManagement/AddRooms";
//import AddEmployees from "./component/StaffManagement/AddEmployees";
//import Login from "./component/Common/Login";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={AddEvent} />
        <Route path="/editEvent/:id" component={EditEvent} />
        <Route path="/viewEvent" component={ViewEvent} />
      </div>
    </Router>
  );
}

export default App;
