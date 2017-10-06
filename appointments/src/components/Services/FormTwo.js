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
import DatePicker from 'react-datepicker';
import './Services.css';


const FormTwo = (props) => {
    return (
        props.service && props.name && props.email && props.phoneNumber && props.message ?
            <div className="container">
                <div className="panel-info">
                    <h1>Welcome, {props.name}</h1>
                    <Form horizontal onSubmit={props.handleSubmit}>
                    <DatePicker
                            selected={props.date}
                            onChange={props.handleDate}
                            showTimeSelect
                            timeIntervals={15}
                            dateFormat="LLL"
                        />
                    
                    <FormGroup>
                        <Col s={12} xs={12} md={10} mdOffset={2}>
                        {
                            props.name && props.email && props.phoneNumber && props.message ?
                                <Button type='submit' bsStyle='primary' active>
                                Next
                                </Button>
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

export default FormTwo;