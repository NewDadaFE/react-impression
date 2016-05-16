import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CheckBox, Radio, Switch } from '../components';

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
                                <CheckBox defaultChecked>basketball</CheckBox>
                                <CheckBox>football</CheckBox>
                                <CheckBox>volleyball</CheckBox>
                                <CheckBox defaultChecked>ping-pong</CheckBox>
                            </div>
                        </div>
                        <div className="form-group col-sm-5">
                            <label>disabled:</label>
                            <div className="checkbox-inline">
                                <CheckBox disabled>Benz</CheckBox>
                                <CheckBox disabled defaultChecked>BMW</CheckBox>
                                <CheckBox disabled>Audi</CheckBox>
                                <CheckBox disabled defaultChecked>Volvo</CheckBox>
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
                                    <Radio defaultChecked>Male</Radio>
                                    <Radio>Female</Radio>
                              </div>
                        </div>
                        <div className="form-group col-xs-5">
                              <label>Disabled</label>
                              <div className="radio-inline">
                                  <Radio disabled>Yes</Radio>
                                  <Radio disabled>No</Radio>
                              </div>
                        </div>
                    </form>
                </div>
                <h3>Switch</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-3">
                            <label>Mute</label>
                            <Switch />
                        </div>
                        <div className="form-group col-xs-3">
                            <label>Disabled</label>
                            <Switch disabled defaultChecked />
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
                            <label htmlFor="exampleInputEmail2">Email</label>
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
                            <label htmlFor="inputEmail3" className="col-sm-2 form-control-label text-xs-right">Email:</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="inputPassword3" className="col-sm-2 form-control-label text-xs-right">name:</label>
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