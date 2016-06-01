import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import LoadingAddon from './LoadingAddon';

let _loading = undefined;

/**
 * Loading组件.
 */
export default class Loading extends Component{
    /**
     * 初始信息.
     */
    constructor(props, context){
        super(props, context);
        _loading = this;

        this.state = {
            show: false
        };

        this.hideHandle = this.hideHandle.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
        //可关闭
        closeable: PropTypes.bool
    }
    //默认props
    static defaultProps = {
        type: 'cyclone',
        closeable: false,
    }
    /**
     * 关闭loading.
     */
    hideHandle(){
        let { closeable } = this.props;

        closeable && this.setState({
            show: false
        });
    }
    //渲染
    render(){
        let { type } = this.props,
            { show } = this.state;

        return (
            <div className={classnames('mask', {hidden: !show})} onClick={this.hideHandle}>
                <LoadingAddon type={type}/>
            </div>
        );
    }
}

Loading.Addon = LoadingAddon;
Loading.show = () => {
    _loading.setState({
        show: true
    });
};

Loading.hide = () => {
    _loading.setState({
        show: false
    });
};
