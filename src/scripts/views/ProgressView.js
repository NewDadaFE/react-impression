import React, { Component } from 'react';

export default class ProgressView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress" value="1" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress" value="25" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress" value="75" max="100"></progress>
                        </div>
                    </div>
                </div>
                <h3>Theme</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-success" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-warning" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-danger" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
                <h3>Striped</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-striped progress-animated" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-striped progress-animated progress-success" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-striped progress-animated progress-warning" value="50" max="100"></progress>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <progress className="progress progress-striped progress-animated progress-danger" value="50" max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}