import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * Loading组件.
 */
export default class Loading extends Component{
        //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
    }
    //默认props
    static defaultProps = {
        type: 'cyclone',
    }
    //渲染
    render(){
        let { type, className, others } = this.props,
            typeClass = `loading-${type}`;

        switch(type){
        case 'fountain':
        case 'wave':
            return(
               <div {...others} className={classnames('loading', typeClass, className)}>
                    <div></div>
                </div>
            );
        case 'pendule':
            return (
                <div {...others} className={classnames('loading', typeClass, className)}>
                    <div></div>
                    <div></div>
                </div>
            );
        case 'cyclone':
            return (
                <div {...others} className={classnames('loading', typeClass, className)}></div>
            );
        }

    }
}

