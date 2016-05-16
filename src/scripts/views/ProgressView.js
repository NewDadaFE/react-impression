import React, { Component } from 'react';
import { Progress } from '../components';


export default class ProgressView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="1"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="25"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="75"/>
                        </div>
                    </div>
                </div>
                <h3>Theme</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="success"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="warning"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="danger"/>
                        </div>
                    </div>
                </div>
                <h3>Striped</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" striped/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="success" striped/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="warning" striped/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Progress value="50" style="danger" striped/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}