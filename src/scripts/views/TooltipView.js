import React, { Component } from 'react';

export default class TooltipView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="in tooltip tooltip-left">
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">Tooltip left</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="in tooltip tooltip-right">
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">Tooltip right</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="in tooltip tooltip-top">
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">Tooltip top</div>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="in tooltip tooltip-bottom">
                                <div className="tooltip-arrow"></div>
                                <div className="tooltip-inner">Tooltip bottom</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}