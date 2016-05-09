import React, { Component } from 'react';
import { Button, ButtonGroup } from '../components';

export default class ButtonGroupView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <ButtonGroup>
                        <Button style="default">Left</Button>
                        <Button style="default">Middle</Button>
                        <Button style="default">Right</Button>
                    </ButtonGroup>
                </div>
                <h3>Thems</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup>
                            <Button style="primary" outline>Left</Button>
                            <Button style="primary" outline>Middle</Button>
                            <Button style="primary" outline>Right</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button style="primary" outline>Left</Button>
                            <Button style="primary" outline>Middle</Button>
                            <Button style="primary" outline>Right</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <h3>Button toolbar</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup>
                            <Button style="default">1</Button>
                            <Button style="default">2</Button>
                            <Button style="default">3</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button style="default">4</Button>
                            <Button style="default">5</Button>
                            <Button style="default">6</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button style="default">7</Button>
                            <Button style="default">8</Button>
                            <Button style="default">9</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <h3>Sizes</h3>
                <div className="card card-block">
                    <div className="btn-toolbar">
                        <ButtonGroup size="lg">
                            <Button style="default">1</Button>
                            <Button style="default">2</Button>
                            <Button style="default">3</Button>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button style="default">4</Button>
                            <Button style="default">5</Button>
                            <Button style="default">6</Button>
                        </ButtonGroup>
                        <ButtonGroup size="sm">
                            <Button style="default">7</Button>
                            <Button style="default">8</Button>
                            <Button style="default">9</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    }
}