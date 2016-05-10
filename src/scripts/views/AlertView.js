import React, { Component } from 'react';
import { Alert } from '../components';

export default class AlertView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="success">
                                <strong>Well done!</strong> You successfully read this important alert message.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="primary">
                                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="warning">
                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="danger">
                                <strong>Oh snap!</strong> Change a few things up and try submitting again.
                            </Alert>
                        </div>
                    </div>
                </div>
                <h3>Link color</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="success">
                              You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="primary">
                              This alert needs your attention, but it's not super important<a href="#" className="alert-link"> click here</a>.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="warning">
                              Better check yourself, you're not looking too good<a href="#" className="alert-link"> click here</a>.
                            </Alert>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Alert style="danger">
                              Change a few things up and try submitting again<a href="#" className="alert-link"> click here</a>.
                            </Alert>
                        </div>
                    </div>
                </div>
                <h3>Dismissible</h3>
                <div className="card card-block">
                        <Alert style="success">
                          <button type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                          </button>
                          You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                        </Alert>
                </div>
            </div>
        );
    }
}