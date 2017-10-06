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
// import DatePicker from 'react-datepicker';

// import moment from 'moment';
// import DatePicker from 'react-date-picker';
// import 'react-day-picker/lib/style.css';
import TimePicker from 'react-bootstrap-time-picker';
// var DateTimeField = require("bootstrap-datetimepicker-npm/build/js/bootstrap-datetimepicker.min.js");
import InputMoment from 'input-moment';

const DateTimeForm = (props) => {
    return (

            <div className="container">
                <div className="panel-info">

          
                    <Form horizontal onSubmit={props.handleDate}>
                    {/* <DatePicker
                        selected={props.date}
                        onSelect={props.handleSelect}
                        onChange={props.handleDate}
                        showTimeSelect
                        timeIntervals={15}
                        dateFormat="LLL"
                        />
                     */}
                        <p>
                            <label for="input">Please enter a time:</label>
                        </p>

                        {/* <DateTimeField 
                            
                        /> */}
                        <FormGroup value={props.date} onChange={(e) => props.handleDate(e)}>
                            <label for="input">Please enter a date:</label>
                            <InputMoment 
                                moment={props.date}
                                
                                onSave={this.handleSave}
                            />
                            
                        </FormGroup>
                        <FormGroup value={props.time} onChange={(e) => props.handleTimeChange('time', e)}>
                            <TimePicker 
                                start="8:00" 
                                end="21:00" step={30}
                                value={props.time}
                            />
                            
                        </FormGroup>

                                                

                        <FormGroup>
                            <Col s={12} xs={12} md={10} mdOffset={2}>
                            {
                                props.date ?
                                    <Link to='/confirmation'>Next</Link>
                                :
                                <p> Fill in all fields </p>
                            }
                            </Col>
                        </FormGroup>
                    </Form> 
                </div>
            </div>
      
    )
};

export default DateTimeForm;