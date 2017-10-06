import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Services = (props) => {
    return (
        <div className="container">
            <div className="panel-info">
                <h1>Select Service</h1>
                <br />
                <select value={props.services} onChange={props.handleService}>
                    <option value=''>Select One</option>
                    <option value="Air Conditioning">Air Conditioning</option>
                    <option value="Appliance Repair">Appliance Repair</option>
                    <option value="Construction">Construction</option>
                    <option value="Remodeling">Remodeling</option>
                    <option value="Plumbing">Plumbing</option>
                </select>
                {props.service ?
                        <div>
                            <br />
                            <Button><Link to='/customer-form'>Next</Link></Button>
                        </div>
                    :
                        <div>
                            <br />
                            <p>Select a service to proceed</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Services;