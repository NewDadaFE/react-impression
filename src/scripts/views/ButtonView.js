import React, { Component } from 'react';
import { Button } from '../components';

export default class ButtonView extends Component{
    buttonClickHandle(event){
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Button style="primary" onClick={this.buttonClickHandle.bind(this)}>primary</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="default">default</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="secondary">secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Outline buttons</h3>
                <div className="card card-block bg-inverse">
                    <div className="row">
                        <div className="col-sm-1">
                            <Button style="primary" outline>primary</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="default" outline>default</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="secondary" outline>secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Button style="primary" size="sm">Sm</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="primary">Normal</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="primary" size="lg">Large</Button>
                        </div>
                    </div>
                </div>
                <h3>Pill buttons</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Button style="primary" shape="pill">primary</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="default" shape="pill">default</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="secondary" shape="pill">secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Link buttons</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Button style="primary" href="www.github.com">primary</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="default" href="www.github.com">default</Button>
                        </div>
                        <div className="col-sm-1">
                            <Button style="secondary" href="www.github.com">secondary</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}