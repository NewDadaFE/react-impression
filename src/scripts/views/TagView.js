import React, { Component } from 'react';
import { Tag } from '../components';

export default class TagView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <h1>Example heading <Tag>tag</Tag></h1>
                    <h2>Example heading <Tag>tag</Tag></h2>
                    <h3>Example heading <Tag>tag</Tag></h3>
                    <h4>Example heading <Tag>tag</Tag></h4>
                    <h5>Example heading <Tag>tag</Tag></h5>
                    <h6>Example heading <Tag>tag</Tag></h6>
                </div>
                <h3>Theme tag</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Tag style="default">default</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="primary">primary</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="success">success</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="info">info</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="warning">warning</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="danger">danger</Tag>
                        </div>
                    </div>
                </div>
                <h3>Pill tag</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-1">
                            <Tag style="default" shape="pill">default</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="primary" shape="pill">primary</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="success" shape="pill">success</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="info" shape="pill">info</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="warning" shape="pill">warning</Tag>
                        </div>
                        <div className="col-sm-1">
                            <Tag style="danger" shape="pill">danger</Tag>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}