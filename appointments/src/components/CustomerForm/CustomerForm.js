import React from 'react';
import {Link} from 'react-router-dom';
import {
    Form,
    FormGroup,
    FormControl,
    Col
} from 'react-bootstrap';

const CustomerForm = (props) => {
    return (
        props.service ?
            <div className="container">
                <div className="panel-info">
                    <h3>{props.service}</h3>
                    <br />
                    <Form horizontal>
                        <FormGroup placeholder="Name" value={props.name} onChange={(e) => props.handleChange('name', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Name</span> 
                            </Col>
                            <Col sm={6}>
                                <FormControl type="name" placeholder="Name"/>
                            </Col>
                        </FormGroup>
                        <FormGroup value={props.email} onChange={(e) => props.handleChange('email', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Email</span>
                            </Col>
                            <Col sm={6}>
                                <FormControl type="email" placeholder="Email"/>
                            </Col>
                        </FormGroup>
                        <FormGroup value={props.phoneNumber} onChange={(e) => props.handleChange('phoneNumber', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Phone Number</span>
                            </Col>
                            <Col sm={6}>
                                <FormControl type="number" placeholder="Phone Number"/>
                            </Col>
                        </FormGroup>
                        <FormGroup value={props.message} onChange={(e) => props.handleChange('message', e)}>
                            <Col sm={3}>
                                <span className='contact-form-font-color'>Message</span>
                            </Col>
                            <Col sm={6}>
                                <FormControl type="text" placeholder="Message"/>
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col s={8}>
                            {
                                props.name && props.email && props.phoneNumber && props.message ?
                                    <Link to='/date-time-form'>Next</Link>
                                :
                                    <p> Fill in all fields </p>
                            }
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        :
            <div className='panel-info'>
                <h1>Go <Link to='/'>Home!</Link></h1>
            </div>
    );
};

export default CustomerForm;