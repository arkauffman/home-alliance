import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import NavBar from './../NavBar/NavBar';
import Services from './../Services/Services';
import FormOne from './../Services/FormOne';
import FormTwo from './../Services/FormTwo';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      service: null,
      name: null,
      email: null,
      phoneNumber: null,
      message: null,
      date: '',
      time: null
    }
  }

  handleService = (e) => {
      console.log('EEEEE', e)
      this.setState({service: e.target.value});
      // this.props.history.push('/form');
      // this.context.router.history.push('/form');
      console.log('service', this.state.service)
  }

  handleChange = (field, e) => {
    this.setState({
      [field]: e.target.value
    });
    console.log('FORM STATE', field, 'value', e.target.value)
  }

  handleDate = (date) => {
    this.setState({
      date: date
    });
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
      <div className="App">
            <NavBar />
            <Switch>
              <Route exact path='/' render={(props) => {
                return (
                  <Services 
                    {...props}
                    updateService={this.updateService}
                    history={this.props.history}
                    handleService={this.handleService}
                    service={this.state.service} />
                )
               }}/>
              
              <Route path='/form' render={(props) => {
                return (
                  <FormOne
                    {...props}
                    history={this.props.history}                  
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
              
              <Route path='/formtwo' render={(props) => {
                return (
                  <FormTwo
                    history={this.props.history}                  
                    service={this.state.service}
                    name={this.state.name}
                    email={this.state.email}
                    phoneNumber={this.state.phoneNumber}
                    message={this.state.message}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    selected={this.state.date}
                    onChange={this.handleDate}
                  />
                )
              }} />
            </Switch>
      </div>
    );
  }
}

export default App;
