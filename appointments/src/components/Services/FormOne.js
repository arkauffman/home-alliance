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
import './Services.css';

const FormOne = (props) => {
    return (
        props.service ?
        <div className="container">
          <div className="panel-info">
            <h1>{props.service}</h1>
            <Form horizontal onSubmit={props.handleSubmit}>
              <FormGroup placeholder="Name" value={props.name} onChange={(e) => props.handleChange('name', e)}>
                <Col componentClass ={ControlLabel}sm={3}>
                  <span className='contact-form-font-color'>Name</span> 
                </Col>
                <Col sm={9}>
                  <FormControl type="name" placeholder="Name"/>
                </Col>
              </FormGroup>
              <FormGroup value={props.email} onChange={(e) => props.handleChange('email', e)}>
                <Col componentClass={ControlLabel} sm={3}>
                  <span className='contact-form-font-color'>Email</span>
                </Col>
                <Col sm={9}>
                  <FormControl type="email" placeholder="Email"/>
                </Col>
              </FormGroup>
              <FormGroup value={props.phoneNumber} onChange={(e) => props.handleChange('phoneNumber', e)}>
                <Col componentClass={ControlLabel} sm={3}>
                  <span className='contact-form-font-color'>Phone Number</span>
                </Col>
                <Col sm={9}>
                  <FormControl type="number" placeholder="Phone Number"/>
                </Col>
              </FormGroup>
              <FormGroup value={props.message} onChange={(e) => props.handleChange('message', e)}>
                <Col componentClass={ControlLabel} sm={3}>
                  <span className='contact-form-font-color'>Message</span>
                </Col>
                <Col sm={9}>
                  <FormControl type="text" placeholder="Message"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col s={12} xs={12} md={10} mdOffset={2}>
                {
                    props.name && props.email && props.phoneNumber && props.message ?
                        <Link to='/formtwo'>Next</Link>
                    :
                    <p> Fill in all fields </p>
                }
                </Col>
              </FormGroup>
            </Form>
        </div>
        </div>

        :

        <div>
            <h1>Redirect!</h1>
        </div>
    )
};

export default FormOne;