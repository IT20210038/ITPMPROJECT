import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import addEvent from "./component/EventManagement/AddEvent";
//import events from "./component/EventManagement/AddEvent";
//import AddRooms from "./component/RoomManagement/AddRooms";
//import AddEmployees from "./component/StaffManagement/AddEmployees";
//import Login from "./component/Common/Login";

function App() {
  return (
    <Router>
      <div>
        <Route path="/addEvent" component={addEvent} />
      </div>
    </Router>
  );
}

export default App;
