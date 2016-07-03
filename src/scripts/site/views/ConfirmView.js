import React, { Component } from 'react';
import { Card, Row, Col, Confirm, Breadcrumb, Button } from '../../components';

export default class ConfirmView extends Component{
    render(){
        return (
            <div>
                <Breadcrumb divider="arrow" routes={this.props.routes}/>
                <Card block noborder>
                    <h3>Basic</h3>
                    <Card block>
                       <Confirm>
                            <Confirm.Body>
                                删除记录将不可恢复
                            </Confirm.Body>
                       </Confirm>
                    </Card>
                </Card>
            </div>
        );
    }
}

ConfirmView.title = 'Confirm';