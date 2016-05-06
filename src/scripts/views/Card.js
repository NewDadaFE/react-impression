import React, { Component } from 'react';

export default class Card extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-block">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <img className="card-img-top" src="http://placehold.it/350x200"/>
                                <div className="card-block">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/350x200"/>
                                <div className="card-block">
                                    <h4 className="card-title">Title</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-block">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <img className="card-img-bottom" src="http://placehold.it/350x200"/>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="card">
                                <div className="card-block">
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Button</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Text align</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/350x200"/>
                                <div className="card-block">
                                    <h4 className="card-title">Left</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 text-xs-center">
                            <div className="card">
                                <img className="card-img-top" src="http://placehold.it/350x200"/>
                                <div className="card-block">
                                    <h4 className="card-title">Center</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="card text-xs-right">
                                <img className="card-img-top" src="http://placehold.it/350x200"/>
                                <div className="card-block">
                                    <h4 className="card-title">Right</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="card-link">Card link</a>
                                        <a href="#" className="card-link">Another link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3>Header and footer</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card">
                                <div className="card-header">
                                    Header
                                </div>
                                <div className="card-block">
                                    <h4 className="card-title">Left</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary card-link">ok</a>
                                    <a href="#" className="btn btn-default card-link">cancel</a>
                                </div>
                                <div className="card-footer">
                                    footer
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-xs-center">
                                <h4 className="card-header">
                                    Header
                                </h4>
                                <div className="card-block">
                                    <h4 className="card-title">center</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary card-link">ok</a>
                                    <a href="#" className="btn btn-default card-link">cancel</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card text-xs-right">
                                <div className="card-block">
                                    <h4 className="card-title">Right</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary card-link">ok</a>
                                    <a href="#" className="btn btn-default card-link">cancel</a>
                                </div>
                                <h5 className="card-footer">
                                    footer
                                </h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}