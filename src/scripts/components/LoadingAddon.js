import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';

/**
 * LoadingAddon组件.
 */
export default class LoadingAddon extends Component{
    /**
     * 初始信息.
     */
    constructor(props, context){
        super(props, context);

        this.state = {
            dottedCount: 1
        };

        this.getLoadingAddon = this.getLoadingAddon.bind(this);
        this.getDotted = this.getDotted.bind(this);
    }
    //props校验
    static propTypes = {
        //自定义样式
        className: PropTypes.string,
        //类型
        type: PropTypes.oneOf(['fountain', 'wave', 'pendule', 'cyclone']),
        //信息提示
        message: PropTypes.string,
    }
    //默认props
    static defaultProps = {
        type: 'cyclone',
        message: '加载中',
    }
    /**
     * 根据类型获取loading的addon.
     * @return {Html} [addon片段]
     */
    getLoadingAddon(){
        let { type } = this.props;

        switch(type){
        case 'fountain'://喷泉
        case 'wave'://波纹
            return(
                <div className={classnames('loading-addon')}>
                    <div></div>
                </div>
            );
        case 'pendule'://摆钟
            return (
                <div className={classnames('loading-addon')}>
                    <div></div>
                    <div></div>
                </div>
            );
        case 'cyclone'://旋风
            return (
                <div className={classnames('loading-addon')}></div>
            );
        }
    }
    /**
     * 获取
     * @return {[type]} [description]
     */
    getDotted(){
        let { dottedCount } = this.state,
            result = [];

        for(let i=0; i < dottedCount; i++){
            result[i] = '.';
        }

        return result.join('');
    }
    /**
     * loading效果.
     */
    componentDidMount(){
        let { dottedCount } = this.state;

        this.interval = setInterval(() => {
            dottedCount += 1;
            dottedCount % 3 !== 0 && (dottedCount = dottedCount % 3);

            this.setState({
                dottedCount
            });
        },600);
    }
    /**
     * 清除定时器.
     */
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    //渲染
    render(){
        let { type, message, className, others } = this.props,
            { dottedCount } = this.state,
            typeClass = `loading-${type}`,
            loadingAddon = this.getLoadingAddon(),
            dotted = this.getDotted();

        return (
            <div {...others} className={classnames('loading', typeClass, className)}>
                {loadingAddon}
                <div className="loading-message">
                    {message}
                    <span className="loading-message-dotted">{ dotted }</span>
                </div>
            </div>
        );
    }
}

