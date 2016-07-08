import React, { Component } from 'react';
import { Card, Row, Col, Pagination, Breadcrumb } from 'impression-react';
import { CommenTable } from '../components';

export default class PaginationView extends Component{
    constructor(prop, context){
        super(prop, context);

        this.state = {
            totalPage: 10,
            activePage: 4,
            totalPage2: 5,
            activePage2: 3
        };

        this.onSelectHandle = this.onSelectHandle.bind(this);
        this.onSelectHandle2 = this.onSelectHandle2.bind(this);
    }
    onSelectHandle(activePage){
        this.setState({
            activePage
        });
    }
    onSelectHandle2(activePage2){
        this.setState({
            activePage2
        });
    }
    render(){
        let { totalPage, activePage, totalPage2, activePage2 } = this.state;

        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Examples</h3>
                    <Card block>
                        <Row>
                            <Col>
                                <Pagination onSelect={this.onSelectHandle} scope={2} totalPage={totalPage} activePage={activePage}></Pagination>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Pagination onSelect={this.onSelectHandle2} scope={2} totalPage={totalPage2} activePage={activePage2}></Pagination>
                            </Col>
                        </Row>
                    </Card>
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
                </Card>
            </div>
        );
    }
}

PaginationView.title = 'Pagination';