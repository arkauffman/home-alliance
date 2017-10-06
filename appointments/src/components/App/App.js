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
      date:null,
      time: null
    }
    this.defaultState = this.state;
  }

  handleService = (e) => {
    this.setState({service: e.target.value});
    console.log('service', this.state.service)
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
  }

  handleNewService = () => {
    this.setState(this.defaultState)
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
    );
  }
}

export default App;
