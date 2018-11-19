import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import CardBlock from '../CardBlock'
import CardHeader from '../CardHeader'
import CardFooter from '../CardFooter'

const outlineClassName = {
  border: 'card-border',
  shadow: 'card-shadow',
  none: '',
}

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
    /**
     * Card组件外轮廓类型
     */
    outline: PropTypes.oneOf(['border', 'shadow', 'none']),
  }

  static defaultProps = {
    block: false,
    outline: 'shadow',
  }

  render() {
    const { block, className, children, outline, ...others } = this.props
    const blockClass = block ? 'card-block' : null
    const outlineClass = outlineClassName[outline]
    delete others.noborder

    return (
      <div
        {...others}
        className={classnames('card', blockClass, outlineClass, className)}
      >
        {children}
      </div>
    )
  }
}

Card.Block = CardBlock
Card.Header = CardHeader
Card.Footer = CardFooter
