import React, { Component } from 'react';

export default class Alert extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="pagination">
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    <span>‹</span>
                                  </a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item disabled"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    <span aria-hidden="true">›</span>
                                  </a>
                                </li>
                              </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}