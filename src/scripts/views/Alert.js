import React, { Component } from 'react';

export default class Alert extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-success">
                                <strong>Well done!</strong> You successfully read this important alert message.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-primary">
                                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-warning">
                                <strong>Warning!</strong> Better check yourself, you're not looking too good.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-danger">
                                <strong>Oh snap!</strong> Change a few things up and try submitting again.
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Link color</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-success">
                              You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-primary">
                              This alert needs your attention, but it's not super important<a href="#" className="alert-link"> click here</a>.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-warning">
                              Better check yourself, you're not looking too good<a href="#" className="alert-link"> click here</a>.
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="alert alert-danger">
                              Change a few things up and try submitting again<a href="#" className="alert-link"> click here</a>.
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Dismissible</h3>
                <div className="card card-block">
                        <div className="alert alert-success">
                          <button type="button" className="close">
                                <span aria-hidden="true">&times;</span>
                          </button>
                          You successfully read this important alert message<a href="#" className="alert-link"> click here</a>.
                        </div>
                </div>
            </div>
        );
    }
}