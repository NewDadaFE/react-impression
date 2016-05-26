import React, { Component } from 'react';
import { Button } from '../../components';
import { CommenTable } from '../components';

export default class ButtonView extends Component{
    buttonClickHandle(event){
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <Button style="primary" onClick={this.buttonClickHandle.bind(this)}>primary</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="default">default</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="secondary">secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Outline buttons</h3>
                <div className="card card-block bg-inverse">
                    <div className="row">
                        <div className="col-sm-2">
                            <Button style="primary" outline>primary</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="default" outline>default</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="secondary" outline>secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <Button style="primary" size="sm">Sm</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="primary">Normal</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="primary" size="lg">Large</Button>
                        </div>
                    </div>
                </div>
                <h3>Pill buttons</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <Button style="primary" shape="pill">primary</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="default" shape="pill">default</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="secondary" shape="pill">secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Link buttons</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-2">
                            <Button style="primary" href="www.github.com">primary</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="default" href="www.github.com">default</Button>
                        </div>
                        <div className="col-sm-2">
                            <Button style="secondary" href="www.github.com">secondary</Button>
                        </div>
                    </div>
                </div>
                <h3>Button API</h3>
                <CommenTable 
                    data = {[
                        ['style', '设置按钮的样式，可选值为 primary、default、secondary', 'string', 'primary'],
                        ['onClick', 'click 事件的 handler', 'function', ''],
                        ['outline', '设置按钮样式是否有外边线', 'boolean', 'false'],
                        ['size', '设置按钮大小，可选值为 sm、normal、large', 'string', ''],
                        ['shape', '设置按钮形状，可选值为 pill', 'string', ''],
                        ['href', '设置按钮链接', 'string', ''],
                        ['close', '设置是否关闭按钮样式', 'string', ''],
                        ['classname', '自定义样式', 'string', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}