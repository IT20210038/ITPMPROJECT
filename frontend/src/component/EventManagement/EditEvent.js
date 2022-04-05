import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//import './EditChnel.css';

export default class EditEvent extends Component {
    constructor(props) {
      super(props);
      
      this.onChangeEventType = this.onChangeEventType.bind(this);
      this.onChangeEventPlace = this.onChangeEventPlace.bind(this);
      this.onChangeNumberOfguests= this.onChangeNumberOfguests.bind(this);
      this.onChangedate = this.onChangedate.bind(this);
      this.onChangeEventFee = this.onChangeEventFee.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        EventType: '',
        EventPlace: '',
        NumberOfguests: '',
        date: new Date(),
        EventFee:''
      }
    }
  
    componentDidMount() {
        axios.get('http://localhost:8070/events/get/' + this.props.match.params.id)
          .then(response => {
            this.setState({
              EventType: response.data.EventType,
              EventPlace: response.data.EventPlace,
              NumberOfguests: response.data.NumberOfguests,
              date: new Date(response.data.date),
              EventFee: response.data.EventFee,
            })
          })
          .catch(function (error) {
            console.log(error);
          })
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
  
    onChangedate(date) {
        this.setState({
            date: date
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
            EventType: this.state.EventType,
            EventPlace: this.state.EventPlace,
            NumberOfguests: this.state.NumberOfguests,
            date: this.state.date,
            EventFee:this.state.EventFee
    }
  
    console.log(EventsManage);
    axios.post('http://localhost:8070/events/update',this.props.match.params.id, EventsManage)
    .then(res => console.log(res.data));

alert("Event Updated!");
window.location = '/viewEvent';
}

render() {
    return (
    <div className="UpdateEventpg"><br/>
      <form onSubmit={this.onSubmit} className="container" id="Updateform">
      <h4>UPDATE EVENT</h4> 
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
          <input type="submit" value="Update Event" className="btn btn-primary" id="b1" />
          </div>
        </div><br/>
       
      </form>
    </div>
       )
    }
  }
  