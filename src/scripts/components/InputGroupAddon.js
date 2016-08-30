import classnames from 'classnames';
import React, { PureComponent, PropTypes } from 'react';

/**
 * InputGroupAddon组件.
 */
export default class InputGroupAddon extends PureComponent {
    static propTypes ={
        pure: PropTypes.bool,
        className: PropTypes.string,

    }
    //渲染
    render(){
        let { pure, className, children, ...others } = this.props,
            pureClass = pure? 'bg-pure' : null;

        return(
            <span {...others} className={classnames('input-group-addon', pureClass, className)}>
                {children}
            </span>
        );
    }
}
