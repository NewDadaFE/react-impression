import React, { Component } from 'react';

export default class ButtonGroupView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="btn-group">
                        <button type="button" className="btn btn-default">Left</button>
                        <button type="button" className="btn btn-default">Middle</button>
                        <button type="button" className="btn btn-default">Right</button>
                    </div>
                </div>
                <h3>Thems</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary">Left</button>
                            <button type="button" className="btn btn-outline-primary">Middle</button>
                            <button type="button" className="btn btn-outline-primary">Right</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-secondary">Left</button>
                            <button type="button" className="btn btn-outline-secondary">Middle</button>
                            <button type="button" className="btn btn-outline-secondary">Right</button>
                        </div>
                    </div>
                </div>
                <h3>Button toolbar</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <div className="btn-group">
                            <button type="button" className="btn btn-default">1</button>
                            <button type="button" className="btn btn-default">2</button>
                            <button type="button" className="btn btn-default">3</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default">4</button>
                            <button type="button" className="btn btn-default">5</button>
                            <button type="button" className="btn btn-default">6</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default">7</button>
                            <button type="button" className="btn btn-default">8</button>
                            <button type="button" className="btn btn-default">9</button>
                        </div>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <div className="btn-group btn-group-lg">
                            <button type="button" className="btn btn-default">1</button>
                            <button type="button" className="btn btn-default">2</button>
                            <button type="button" className="btn btn-default">3</button>
                        </div>
                        <div className="btn-group">
                            <button type="button" className="btn btn-default">4</button>
                            <button type="button" className="btn btn-default">5</button>
                            <button type="button" className="btn btn-default">6</button>
                        </div>
                        <div className="btn-group btn-group-sm">
                            <button type="button" className="btn btn-default">7</button>
                            <button type="button" className="btn btn-default">8</button>
                            <button type="button" className="btn btn-default">9</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}