import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './../NavBar/NavBar';
import Services from './../Services/Services';
import CustomerForm from './../CustomerForm/CustomerForm';
import DateTimeForm from './../DateTimeForm/DateTimeForm';
import ConfirmationPage from './../ConfirmationPage/ConfirmationPage';
import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null,
      name: null,
      email: null,
      phoneNumber: null,
      message: null,
      time: 0,
      date: moment()
    }
    this.defaultState = this.state;

    this.handleDate = this.handleDate.bind(this);
  }

  handleService = (e) => {
    this.setState({service: e.target.value});
    console.log('service', this.state.service)
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
    // this.setState({time: this.state.time/3600})
    console.log('FORM STATE', field, 'value', e.target.value)
  }

  handleTimeChange = (field, e) => {
    this.setState({
      [field]: e.target.value/3600
    });
    // this.setState({time: this.state.time/3600})
    console.log('FORM STATE', field, 'value', e.target.value)
  }

  // handleTimeChange = (field, time) => {
  //   // time is returned in seconds, so divide time by the number of seconds
  //   // in a single hour 10:30 --> 10.5
  //   console.log('SECONDS TO MINUTES!!', time/3600);
  //   this.setState({
  //     [field]: time.target.value/3600
  //   });
  // }

  handleDate = (newDate) => {
    console.log('new date', newDate)
    this.setState({
      date: newDate.target.value
    });
    console.log('DATE!!!', this.state.date)
  }

  handleNewService = () => {
    this.setState(this.defaultState)
  }

  handleSubmit = () => {
    console.log('yo!');
  }

  componentDidMount() {
    this.state.service;
  }

  render() {
    console.log('state', this.state.service)
    return (
      <div className='App'>
            <NavBar />
            <Switch>
              <Route exact path='/' render={(props) => {
                return (
                  <Services 
                    {...props}
                    updateService={this.updateService}
                    handleService={this.handleService}
                    service={this.state.service} />
                )
               }}/>
              
              <Route path='/customer-form' render={(props) => {
                return (
                  <CustomerForm
                    {...props}                
                    service={this.state.service}
                    name={this.state.name}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    message={this.state.message}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                  />
                )
              }} />
              
              <Route path='/date-time-form' render={(props) => {
                return (
                  <DateTimeForm                 
                    service={this.state.service}
                    name={this.state.name}
                    
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleTimeChange={this.handleTimeChange}
                    handleDate={this.handleDate}


                    date={this.state.date}
                    format={this.state.format}
                    mode={this.state.mode}
                    inputFormat={this.state.inputFormat}

                    time={this.state.time}
                  />
                )
              }} />

              <Route path='/confirmation' render={(props) => {
                return (
                  <ConfirmationPage               
                    service={this.state.service}
                    name={this.state.name}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    message={this.state.message}
                    date={this.state.date}
                    time={this.state.time}
                    
                    handleNewService={this.handleNewService}
                  />
                )
              }} />
            </Switch>
      </div>
    );
  }
}

export default App;
