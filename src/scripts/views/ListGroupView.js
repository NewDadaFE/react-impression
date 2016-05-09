import React, { Component } from 'react';

export default class ListGroupView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <h5>Normal</h5>
                            <ul className="list-group">
                                <li className="list-group-item">Cras justo odio</li>
                                <li className="list-group-item">Dapibus ac facilisis in</li>
                                <li className="list-group-item disabled">Morbi leo risus</li>
                                <li className="list-group-item">Porta ac consectetur ac</li>
                                <li className="list-group-item">Vestibulum at eros</li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h5>Tags</h5>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <span className="tag tag-default tag-pill pull-xs-right">1</span>
                                    Cras justo odio
                                </li>
                                <li className="list-group-item">
                                    <span className="tag tag-warning tag-pill pull-xs-right">2</span>
                                    Dapibus ac facilisis in
                                </li>
                                <li className="list-group-item">
                                    <span className="tag tag-danger tag-pill pull-xs-right">3</span>
                                    Morbi leo risus</li>
                                <li className="list-group-item">
                                    <span className="tag tag-success tag-pill pull-xs-right">4</span>
                                    Porta ac consectetur ac
                                </li>
                                <li className="list-group-item">
                                    <span className="tag tag-primary tag-pill pull-xs-right">5</span>
                                    Vestibulum at eros
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <h5>Link</h5>
                            <div className="list-group">
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">Cras justo odio</a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action active">Dapibus ac facilisis in</a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">Morbi leo risus</a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">Vestibulum at eros</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Custom content</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="list-group">
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action active">
                                    <h5 className="list-group-item-heading">List group item heading</h5>
                                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">
                                    <h5 className="list-group-item-heading">List group item heading</h5>
                                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                                <a href="javascript:void(0)" className="list-group-item list-group-item-action">
                                    <h5 className="list-group-item-heading">List group item heading</h5>
                                    <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}