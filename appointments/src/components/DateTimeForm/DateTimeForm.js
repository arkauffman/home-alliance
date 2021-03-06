import React from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    Col,
    FormControl,
    Button
} from 'react-bootstrap';

const DateTimeForm = (props) => {
    return (
        props.service && props.name && props.email && props.phoneNumber && props.message ?
            <div className='container'>
                <div className='panel-info'>
                    <h3>Welcome, {props.name}</h3>
                    <br />
                    <Form horizontal>
                        <FormGroup value={props.date} onChange={(e) => props.handleChange('date', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Date</span>
                            </Col>
                            <Col sm={6}>
                                <FormControl type='date' placeholder='Date'/>
                            </Col>
                        </FormGroup>              
                        
                        <FormGroup value={props.time} onChange={(e) => props.handleChange('time', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Time</span>
                            </Col>
                            <Col sm={6}>
                                <FormControl type='time'/>
                            </Col>
                        </FormGroup>              

                        <FormGroup>
                            <Col s={12}>
                            {
                                props.date ?
                                   <Button><Link to='/confirmation'>Next</Link></Button>
                                :
                                    <p> Fill in all fields </p>
                            }
                            </Col>
                        </FormGroup>
                    </Form> 
                </div>
            </div>
        :
            // if this information is lacking, it will provide a link to go to the home page
            <div className='panel-info'>
                <h1>Go <Link to='/'>Home!</Link></h1>
            </div>
    );
};

export default DateTimeForm;