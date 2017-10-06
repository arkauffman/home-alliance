import React from 'react';
import {Link} from 'react-router-dom';
import {
    Panel,
    ListGroup,
    ListGroupItem,
    Button,
    Form,
    FormGroup,
    ControlLabel,
    Col,
    FormControl
} from 'react-bootstrap';


const Confirmation = (props) => {
    return (
        props.service && props.name && props.email && props.phoneNumber && props.message ?
            <div className="container">
                <div className="panel-info">
                    <p>Service: {props.service}</p>
                    <p>Name: {props.name}</p>
                    <p>Email: {props.email}</p>
                    <p>Phone Number: {props.phoneNumber}</p>
                    <p>Message: {props.message}</p>
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