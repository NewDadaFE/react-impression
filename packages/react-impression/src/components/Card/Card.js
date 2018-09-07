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
    children: PropTypes.node,

    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 是否block
     */
    block: PropTypes.bool,
  }

  static defaultProps = {
    block: false,
  }

  render() {
    const { block, className, children, ...others } = this.props
    const blockClass = block ? 'card-block' : null

    return (
      <div {...others} className={classnames('card', blockClass, className)}>
        {children}
      </div>
    )
  }
}

Card.Block = CardBlock
Card.Header = CardHeader
Card.Footer = CardFooter
