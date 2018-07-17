import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import CardBlock from '../CardBlock'
import CardHeader from '../CardHeader'
import CardFooter from '../CardFooter'

export default class Card extends React.PureComponent {
  static propTypes = {
    /**
      * 子组件
      */
    children: PropTypes.any,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否block
     */
    block: PropTypes.bool,

    /**
     * 是否无边框
     */
    noborder: PropTypes.bool,
  }

  static defaultProps = {
    block: false,
    noborder: false,
  }

  render() {
    const { block, noborder, className, children, ...others } = this.props
    const blockClass = block ? 'card-block' : null
    const borderClass = noborder ? 'no-border' : null

    return (
      <div
        {...others}
        className={classnames('card', blockClass, borderClass, className)}
      >
        {children}
      </div>
    )
  }
}

Card.Block = CardBlock
Card.Header = CardHeader
Card.Footer = CardFooter
