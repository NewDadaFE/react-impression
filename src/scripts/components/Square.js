import React, { Component } from 'react';

/**
 * Square组件.
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