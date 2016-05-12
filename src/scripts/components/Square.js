import React, { Component } from 'react';

/**
 * Square.
 */
export default class Square extends Component{
    //渲染
    render(){

        return(
           <div className="square">
                {this.props.children}
           </div>
        );
    }

}