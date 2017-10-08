import React from 'react';
import {Link} from 'react-router-dom';
import {Modal, Button} from 'react-bootstrap';
import moment from 'moment';

const Confirmation = (props) => {
    return (
        props.service && props.name && props.email && props.phoneNumber 
        && props.message && props.date && props.time ?
            <div className='container'>
                <div className='panel-info'>
                    <div className='static-modal'>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Service Confirmation</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <h4>Service: {props.service}</h4>
                                <h4>Name: {props.name}</h4>
                                <h4>Email: {props.email}</h4>
                                <h4>Phone Number: {props.phoneNumber}</h4>
                                <h4>Message: {props.message}</h4>
                                <h4>Appointment Date: {props.date}</h4>
                                {/* formatting time to have AM and PM capability */}
                                <h4>Appointment Time: {moment(props.time, 'HH:mm:ss').format('h:mm A')}</h4>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button><Link to='/' onClick={props.handleNewService}>Start Over</Link></Button>
                                &nbsp; &nbsp; | &nbsp; &nbsp;
                                <Button><Link to='/' onClick={props.handleNewService}>Confirm</Link></Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        :
            // if this information is lacking, it will provide a link to go to the home page
            <div className='panel-info'>
                <h1>Go <Link to='/'>Home!</Link></h1>
            </div>
    );
};

export default Confirmation;