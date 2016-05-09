import React, { Component } from 'react';

export default class InputGroupView extends Component{
    render(){
        return (
            <div>
                <h3>Basic examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                              <span className="input-group-addon" id="basic-addon1">@</span>
                              <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                              <span className="input-group-addon" id="basic-addon1">@</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                              <span className="input-group-addon" id="basic-addon1">@</span>
                              <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                              <span className="input-group-addon" id="basic-addon1">@</span>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Button addons</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button">help</button>
                                </span>
                              <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">Go</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">×</button>
                                </span>
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-secondary" type="button">√</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">Go</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">Go</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input-group input-group-lg">
                                <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-primary" type="button">Go</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}