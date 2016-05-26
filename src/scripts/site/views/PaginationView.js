import React, { Component } from 'react';
import { Pagination } from '../../components';
import { CommenTable } from '../components';

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
                <h3>Pagintion API</h3>
                <CommenTable
                    data = {[
                        ['scope', '设置前后延伸几页', 'number', '2'],
                        ['activePage', '当前在第几页', 'number', '1'],
                        ['totalPage', '总页数', 'number', ''],
                        ['ellipsis', '是否显示省略号', 'boolean', 'true'],
                        ['onSelect', '选中回调函数', 'function', ''],
                        ['className', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}