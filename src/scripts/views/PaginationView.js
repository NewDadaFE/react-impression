import React, { Component } from 'react';
import { Pagination } from '../components';


export default class PaginationView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="page-link" href="#">‹</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item active"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item disabled"><a className="page-link" href="#">5</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">›</a>
                                </li>
                            </ul>
                            <Pagination items={10} activePage={5}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}