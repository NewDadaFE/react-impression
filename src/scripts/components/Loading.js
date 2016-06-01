import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import LoadingAddon from './LoadingAddon';

/**
 * Loading组件.
 */
export default class Loading extends Component{
    /**
     * 初始信息.
     */
    constructor(props, context){
        super(props, context);

        this.state = {
            show: false
        };
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
        //
    }
    //默认props
    static defaultProps = {
        type: 'cyclone',
    }
    componentWillReceiveProps(nextProps){
        (nextProps.show !== undefined) && this.setState({
            show: nextProps.show
        });
    }
    //渲染
    render(){
        let { type } = this.props,
            { show } = this.state;

        return (
            <div className={classnames('mask', {hidden: !show})}>
                <LoadingAddon type={type}/>
            </div>
        );
    }
}


Loading.Addon = LoadingAddon;
