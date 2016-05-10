import React, { Component } from 'react';

export default class FormView extends Component{
    render(){
        return (
            <div>
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
                        <div className="checkbox">
                            <label>
                                <input type="checkbox"/> Remember me
                            </label>
                        </div>
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
                          <div className="radio">
                            <label>
                              <input type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                              Option one is this and that&mdash;be sure to include why it's great
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                              Option two can be something else and selecting it will deselect option one
                            </label>
                          </div>
                          <div className="radio disabled">
                            <label>
                              <input type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                              Option three is disabled
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-sm-2  text-xs-right">Checkbox:</label>
                        <div className="col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> Check me out
                            </label>
                          </div>
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