import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import { Checkbox, CheckboxGroup, Radio, RadioGroup, Switch } from '../components';

export default class FormView extends Component{
    render(){
        return (
            <div>
                <h3>Checkbox</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-6">
                            <label>interest:</label>
                            <CheckboxGroup value={['basketball', 'football']}>
                                <Checkbox>basketball</Checkbox>
                                <Checkbox>football</Checkbox>
                                <Checkbox>volleyball</Checkbox>
                                <Checkbox>ping-pong</Checkbox>
                            </CheckboxGroup>
                        </div>
                        <div className="form-group col-sm-5">
                            <label>disabled:</label>
                            <CheckboxGroup value={['Benz', 'BMW']} disabled>
                                <Checkbox>Benz</Checkbox>
                                <Checkbox>BMW</Checkbox>
                                <Checkbox>Audi</Checkbox>
                                <Checkbox>Volvo</Checkbox>
                            </CheckboxGroup>
                        </div>
                    </form>
                </div>
                <h3>Radio</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-6">
                            <label>Gender</label>
                            <RadioGroup value="1">
                                <Radio value="1">Male</Radio>
                                <Radio value="0">Female</Radio>
                            </RadioGroup>
                        </div>
                        <div className="form-group col-xs-5">
                            <label>Disabled</label>
                            <RadioGroup disabled>
                                <Radio defaultChecked>Yes</Radio>
                                <Radio>No</Radio>
                            </RadioGroup>
                        </div>
                    </form>
                </div>
                <h3>Switch</h3>
                <div className="card card-block">
                    <form className="form-inline row">
                        <div className="form-group col-xs-3">
                            <label>Mute</label>
                            <Switch defaultChecked/>
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
                                <RadioGroup direction="column">
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                    <Radio>Option one is this and that&mdash;be sure to include why it's great</Radio>
                                </RadioGroup>
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