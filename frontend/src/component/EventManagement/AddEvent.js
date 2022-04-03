import React, {Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import './Add.css';

export default class AddEvent extends Component {
    constructor(props) {
      super(props);
      
      this.onChangeEventId = this.onChangeEventId.bind(this);
      this.onChangeEventType = this.onChangeEventType.bind(this);
      this.onChangeEventPlace = this.onChangeEventPlace.bind(this);
      this.onChangeNumberOfguests= this.onChangeNumberOfguests.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeEventFee = this.onChangeEventFee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        EventId:'',
        EventType: '',
        EventPlace: '',
        NumberOfguests: '',
        date: new Date(),
        EventFee:''
      }
    }
  
    onChangeEventId(e) {
      this.setState({
          EventId: e.target.value
      });
    }

    onChangeEventType(e) {
        this.setState({
            EventType: e.target.value
        });
    }

    onChangeEventPlace(e) {
        this.setState({
            EventPlace: e.target.value
        });
    }
  
    onChangeNumberOfguests(e) {
        this.setState({
            NumberOfguests: e.target.value
        });
    }
  
    onChangedate(e) {
        this.setState({
            date: e.target.value
        });
    }

    onChangeEventFee(e) {
        this.setState({
            EventFee: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
    
    const EventsManage = {
            EventId: this.state.EventId,
            EventType: this.state.EventType,
            EventPlace: this.state.EventPlace,
            NumberOfguests: this.state.NumberOfguests,
            date: this.state.date,
            EventFee:this.state.EventFee
    }
  
    console.log(EventsManage);

    axios.post('http://localhost:8070/events/add', EventsManage)
        .then(res => console.log(res.data));

    alert("New Event added!");
    //window.location = '/manageChannel';
  }

  render() {
    return (
    <div className="AddEventpg"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Addform">
      <h4>ADD NEW EVENT</h4> 
      <div className="form-group" > 
          <label>Event Id: </label>
          <input type="text"
              required
              name="CNo"
              placeholder="Enter event id"
              className="form-control"
              value={this.state.EventId}
              onChange={this.onChangeEventId}
              /> 
    </div><br/>
      <div className="form-group"> 
          <label>Event Type: </label>
          <input type="text"
              required
              name="pName"
              placeholder="Enter event type"
              className="form-control"
              value={this.state.EventType}
              onChange={this.onChangeEventType}
              />
        </div><br/>
        <div className="form-group"> 
          <label>Event Place: </label>
          <input  type="text"
              required
              name="EventP"
              placeholder="Enter Event place"
              className="form-control"
              value={this.state.EventPlace}
              onChange={this.onChangeEventPlace}
              />
        </div><br/>
        <div className="form-group">
          <label>Number Of Guests: </label>
          <input 
              type="text" 
              className="form-control"
              name="Dname"
              placeholder="Enter Number of guests"
              value={this.state.NumberOfguests}
              onChange={this.onChangeNumberOfguests}
          />
        </div><br/>
        <div className="form-group">
          <label>date: </label>
          <div>
            <DatePicker
              name="dte"
              selected={this.state.date}
              onChange={this.onChangedate}
            />
          </div>
        </div><br/>
        <div className="form-group"> 
          <label>Event Fee: </label>
          <input  type="text"
              required
              name="dfee"
              className="form-control"
              placeholder="Enter event fee"
              value={this.state.EventFee}
              onChange={this.onChangeEventFee}
              />
        </div><br/>

        <div className="form-group">
        <div class="col text-center">
          <input type="submit" value="ADD Event" className="btn btn-primary" id="b1" />
          </div>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }
  