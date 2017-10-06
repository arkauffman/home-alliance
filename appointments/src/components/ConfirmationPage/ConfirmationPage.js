import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Confirmation = (props) => {
    return (
        props.service && props.name && props.email && props.phoneNumber 
        && props.message && props.date && props.time ?
            <div className="container">
                <div className="panel-info">
                    <p>Service: {props.service}</p>
                    <p>Name: {props.name}</p>
                    <p>Email: {props.email}</p>
                    <p>Phone Number: {props.phoneNumber}</p>
                    <p>Message: {props.message}</p>
                    <p>Appointment Date: {props.date}</p>
                    <p>Appointment Time: {moment(props.time, 'HH:mm:ss').format('h:mm A')}</p>
                    
                    <Link to='/' onClick={props.handleNewService}>Confirm</Link> 
                    &nbsp; | &nbsp;
                    <Link to='/' onClick={props.handleNewService}>Start Over</Link>
                    
                </div>
            </div>
        :
            <div className='panel-info'>
                <h1>Go <Link to='/'>Home!</Link></h1>
            </div>
    )
};

export default Confirmation;