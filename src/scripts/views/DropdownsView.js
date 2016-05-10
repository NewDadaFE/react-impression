import React, { Component } from 'react';
;
export default class DropdownsView extends Component{
    render(){
        return (
            <div>
                <h3>Image fluid</h3>
                <div className="card card-block">
                    <div className="dropdown open">
                      <button className="btn btn-primary dropdown-toggle" type="button">
                        Dropdown
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item disabled" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                      </div>
                    </div>
                </div>
            </div>
        );
    }
}