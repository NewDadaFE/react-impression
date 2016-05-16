import React, { Component } from 'react';
import { Pagination } from '../components';


export default class PaginationView extends Component{
    onSelectHandle(pageNum){
        // console.log(pageNum);
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-12">
                            <Pagination onSelect={this.onSelectHandle} scope={2} totalPage={10} activePage={4}></Pagination>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <Pagination onSelect={this.onSelectHandle} scope={2} totalPage={5} activePage={3}></Pagination>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}