import React, { Component } from 'react';
import { Button, Tooltip } from '../components';


export default class TooltipView extends Component{
    onMouseOver(){
    }
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-3">
                            <Tooltip position="right" msg="Tooltip right">
                                <Button style="primary" onMouseOver={this.onMouseOver}>Right</Button>
                            </Tooltip>
                        </div>
                        <div className="col-sm-3">
                            <Tooltip position="top" msg="Tooltip top">
                                <Button style="primary">Top</Button>
                            </Tooltip>
                        </div>
                        <div className="col-sm-3">
                            <Tooltip position="bottom" msg="Tooltip bottom">
                                <Button style="primary">Bottom</Button>
                            </Tooltip>
                        </div>
                        <div className="col-sm-3">
                            <Tooltip position="left" msg="Tooltip left">
                                <Button style="primary">Left</Button>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}