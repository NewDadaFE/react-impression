import React, { Component } from 'react';

export default class BreadcrumbView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </div>
                <h3>Arrow divider</h3>
                <div className="card">
                    <ol className="breadcrumb breadcrumb-arrow">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active">Data</li>
                    </ol>
                </div>
            </div>
        );
    }
}