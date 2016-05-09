import React, { Component } from 'react';

export default class Tag extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <h1>Example heading <span className="tag tag-default">tag</span></h1>
                    <h2>Example heading <span className="tag tag-default">tag</span></h2>
                    <h3>Example heading <span className="tag tag-default">tag</span></h3>
                    <h4>Example heading <span className="tag tag-default">tag</span></h4>
                    <h5>Example heading <span className="tag tag-default">tag</span></h5>
                    <h6>Example heading <span className="tag tag-default">tag</span></h6>
                </div>
                <h3>Theme tag</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <span className="tag tag-default">default</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-primary">primary</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-success">success</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-info">info</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-warning">warning</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-danger">danger</span>
                        </div>
                    </div>
                </div>
                <h3>Pill tag</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-default">default</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-primary">primary</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-success">success</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-info">info</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-warning">warning</span>
                        </div>
                        <div className="col-sm-1">
                            <span className="tag tag-pill tag-danger">danger</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}