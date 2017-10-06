import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './../NavBar/NavBar';
import Services from './../Services/Services';
import CustomerForm from './../CustomerForm/CustomerForm';
import DateTimeForm from './../DateTimeForm/DateTimeForm';
import ConfirmationPage from './../ConfirmationPage/ConfirmationPage';
import moment from 'moment';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null,
      name: null,
      email: null,
      phoneNumber: null,
      message: null,
      date: null,
      time: null
    }
    // setting defaultState to state to help reset entire state upon completion
    this.defaultState = this.state;
  }

  handleService = (e) => {
    // sets a specified service to state
    this.setState({service: e.target.value});
  }

  handleChange = (field, e) => {
    // sets every other part of state to value specified in a form
    this.setState({
      [field]: e.target.value
    });
  }

  handleNewService = () => {
    // resets state when on confirmation page
    this.setState(this.defaultState)
  }

  render() {
    return (
      <Router>
        <div className='App'>
            <NavBar />
            <Switch>
              <Route exact path='/' render={(props) => {
                return (
                  <Services 
                    service={this.state.service}
                    handleService={this.handleService}
                  />
                )
                }}/>
              
              <Route exact path='/customer-form' render={(props) => {
                return (
                  <CustomerForm
                    {...props}                
                    service={this.state.service}
                    name={this.state.name}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    message={this.state.message}
                    handleChange={this.handleChange}
                  />
                )
              }} />
              
              <Route exact path='/date-time-form' render={(props) => {
                return (
                  <DateTimeForm                 
                    service={this.state.service}
                    name={this.state.name}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    message={this.state.message}
                    date={this.state.date}
                    time={this.state.time}
                    handleChange={this.handleChange}                  
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
                    handleDate={this.handleDate}
                    handleNewService={this.handleNewService}
                  />
                )
              }} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
