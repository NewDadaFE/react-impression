import React, { Component } from 'react';
import { Button, ButtonGroup } from '../components';
import { CommenTable } from '../site';

export default class ButtonGroupView extends Component{
    //onSelect
    btnGroupSelectHandle(eventKey, event){
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <ButtonGroup style="default" activeKey="left">
                        <Button eventKey="left">Left</Button>
                        <Button eventKey="middle">Middle</Button>
                        <Button eventKey="right">Right</Button>
                    </ButtonGroup>
                </div>
                <h3>Thems</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup style="primary" onSelect={this.btnGroupSelectHandle.bind(this)} activeKey="right">
                            <Button eventKey="left">Left</Button>
                            <Button eventKey="middle">Middle</Button>
                            <Button eventKey="right">Right</Button>
                        </ButtonGroup>
                        <ButtonGroup style="secondary" activeKey="middle">
                            <Button eventKey="left">Left</Button>
                            <Button eventKey="middle">Middle</Button>
                            <Button eventKey="right">Right</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <h3>Button toolbar</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup>
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>4</Button>
                            <Button>5</Button>
                            <Button>6</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>7</Button>
                            <Button>8</Button>
                            <Button>9</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup size="lg">
                            <Button>1</Button>
                            <Button>2</Button>
                            <Button>3</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button>4</Button>
                            <Button>5</Button>
                            <Button>6</Button>
                        </ButtonGroup>
                        <ButtonGroup size="sm">
                            <Button>7</Button>
                            <Button>8</Button>
                            <Button>9</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <h3>API</h3>
                <CommenTable
                    data = {[
                        ['size', '可选参数，设置按钮组大小，可选值为 lg、sm', 'string', ''],
                        ['style', '可选参数，设置按钮组主题样式，可选值为 primary、secondary、default', 'string', 'default'],
                        ['activeKey', '可选参数，激活索引，被选中按钮会额外添加选中样式，为空时不额外添加选中样式', 'any', ''],
                        ['onSelect', '可选参数，设置按钮选中回调函数', 'function', ''],
                    ]}
                ></CommenTable>
            </div>
        );
    }
}