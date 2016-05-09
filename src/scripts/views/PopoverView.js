import React, { Component } from 'react';

export default class PopoverView extends Component{
    render(){
        return (
            <div>
                <h3>Examples</h3>
                <div className="card card-block">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="popover popover-left">
                            <div className="popover-arrow"></div>
                            <h3 className="popover-title">Popover left</h3>
                            <div className="popover-content">
                                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="popover popover-right">
                            <div className="popover-arrow"></div>
                            <h3 className="popover-title">Popover right</h3>
                            <div className="popover-content">
                                <p>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}