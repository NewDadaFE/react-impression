import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-primary">primary</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-default">default</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-secondary">secondary</button>
                        </div>
                    </div>
                </div>
                <h3>Outline buttons</h3>
                <div className="card card-block bg-inverse">
                    <div className="row">
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-outline-primary">primary</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-outline-default">default</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-outline-secondary">secondary</button>
                        </div>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-sm btn-primary">sm</button>

                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn btn-primary">normal</button>
                        </div>
                        <div className="col-sm-2">
                             <button type="button" className="btn btn-lg btn-primary pull-right">large</button>
                        </div>
                    </div>
                </div>
                <h3>Pill buttons</h3>
                  <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                             <button type="button" className="btn-pill btn btn-primary">primary</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn-pill btn btn-default">default</button>
                        </div>
                        <div className="col-sm-1">
                             <button type="button" className="btn-pill btn btn-secondary">secondary</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}