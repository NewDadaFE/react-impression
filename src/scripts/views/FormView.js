import React, { Component } from 'react';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <h3>Checkbox</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-6">
                            <label>interest:</label>
                            <div className="checkbox-inline">
                                <label className="checkbox">
                                    <input type="checkbox" defaultChecked/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        basketball
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        football
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        volleyball
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" defaultChecked/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        ping-pong
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-sm-5">
                            <label>disabled:</label>
                            <div className="checkbox-inline">
                                <label className="checkbox">
                                    <input type="checkbox" disabled/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        Benz
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" disabled checked/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        BMW
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" disabled/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        Audi
                                    </span>
                                </label>
                                <label className="checkbox">
                                    <input type="checkbox" disabled checked/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        Volvo
                                    </span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <h3>Radio</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-6">
                              <label>Gender</label>
                              <div className="radio-inline">
                                  <label className="radio">
                                        <input type="radio" name="gender" defaultChecked/>
                                        <div className="radio-addon">
                                            <i></i>
                                        </div>
                                      <span className="radio-label">Male</span>
                                  </label>
                                  <label className="radio">
                                        <input type="radio" name="gender"/>
                                        <div className="radio-addon">
                                            <i></i>
                                        </div>
                                        <span className="radio-label">Female</span>
                                  </label>
                              </div>
                        </div>
                        <div className="form-group col-xs-5">
                              <label>Disabled</label>
                              <div className="radio-inline">
                                  <label className="radio">
                                        <input type="radio" name="radio" defaultChecked disabled/>
                                        <div className="radio-addon">
                                            <i></i>
                                        </div>
                                      <span className="radio-label">Yes</span>
                                  </label>
                                  <label className="radio">
                                        <input type="radio" name="radio" disabled/>
                                        <div className="radio-addon">
                                            <i></i>
                                        </div>
                                        <span className="radio-label">No</span>
                                  </label>
                              </div>
                        </div>
                    </form>
                </div>
                <h3>Switch</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-3">
                                <label>Mute</label>
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <div className="switch-addon"></div>
                                </label>
                        </div>
                        <div className="form-group col-xs-3">
                                <label>Disabled</label>
                                <label className="switch">
                                    <input type="checkbox" defaultChecked disabled/>
                                    <div className="switch-addon"></div>
                                </label>
                        </div>
                    </form>
                </div>
                <h3>Form inline</h3>
                <div className="card card-block">
                    <form className="form-inline">
                        <div className="form-group">
                            <label htmlFor="exampleInputName2">Name:</label>
                            <input type="text" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail2">Email</label>
                            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
                        </div>
                        <label className="checkbox">
                            <input type="checkbox" defaultChecked/>
                            <div className="checkbox-addon">
                                <i className="fa fa-check"></i>
                            </div>
                            <span className="checkbox-label">
                                Remember me
                            </span>
                        </label>
                        <button type="button" className="btn btn-primary">Send</button>
                    </form>
                </div>
                <h3>Form horizontal</h3>
                <div className="card card-block">
                    <form className="form-horizontal">
                        <div className="form-group row">
                            <label for="inputEmail3" className="col-sm-2 form-control-label text-xs-right">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label for="inputPassword3" className="col-sm-2 form-control-label text-xs-right">name:</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 text-xs-right">Radios:</label>
                            <div className="col-sm-10">
                                <label className="radio">
                                    <input type="radio" name="gender" defaultChecked/>
                                    <div className="radio-addon">
                                        <i></i>
                                    </div>
                                    <span className="radio-label">
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <label className="radio">
                                    <input type="radio" name="gender" defaultChecked/>
                                    <div className="radio-addon">
                                        <i></i>
                                    </div>
                                    <span className="radio-label">
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <label className="radio">
                                    <input type="radio" name="gender" defaultChecked/>
                                    <div className="radio-addon">
                                        <i></i>
                                    </div>
                                    <span className="radio-label">
                                        Option one is this and that&mdash;be sure to include why it's great
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2  text-xs-right">Checkbox:</label>
                            <div className="col-sm-10">
                                <label className="checkbox">
                                    <input type="checkbox" defaultChecked/>
                                    <div className="checkbox-addon">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <span className="checkbox-label">
                                        Remember me
                                    </span>
                                </label>
                          </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-1 col-sm-10">
                                <button type="submit" className="btn btn-primary">Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}