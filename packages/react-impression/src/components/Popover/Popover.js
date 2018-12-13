import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import Popper from 'popper.js'

export default class Popover extends React.PureComponent {
  static propTypes = {
    /**
     * 显示位置
     */
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']).isRequired,
    /**
     * 标题
     */
    title: PropTypes.node,
    /**
     * 内容
     */
    content: PropTypes.node,
    /**
     * 子组件
     */
    children: PropTypes.element.isRequired,
    /**
     * 触发方式
     */
    trigger: PropTypes.oneOf(['click', 'hover']),
  }

  static defaultProps = {
    position: 'right',
    trigger: 'hover',
  }

  /**
   * popover子元素ref
   */
  reference = null

  /**
   * popover子元素的dom节点
   */
  referenceDom = null

  /**
   * 弹出层元素的ref节点
   */
  popper = null

  /**
   * 关闭和打开弹出层的计数器
   */
  timer = null

  /**
   * popper的实例
   */
  popperJS = null

  state = {
    showPopper: false,
  }

  componentDidMount() {
    this.addEventListeners()
  }

  componentWillUnmount() {
    this.removeEventListeners()
  }

  addEventListeners = () => {
    const { trigger } = this.props

    this.referenceDom = ReactDOM.findDOMNode(this.reference)
    if (this.referenceDom === null) return

    if (trigger === 'click') {
      this.referenceDom.addEventListener('click', this.handleReferenceDomClick)
      document.addEventListener('click', this.handleDocumentClick)
    } else if (trigger === 'hover') {
      this.referenceDom.addEventListener('mouseenter', this.onMouseOver)
      this.referenceDom.addEventListener('mouseleave', this.onMouseOut)

      this.popper.addEventListener('mouseenter', this.onMouseOver)
      this.popper.addEventListener('mouseleave', this.onMouseOut)
    }
  }

  removeEventListeners = () => {
    const { trigger } = this.props

    if (this.referenceDom === null) return
    if (trigger === 'click') {
      this.referenceDom.removeEventListener(
        'click',
        this.handleReferenceDomClick
      )
      document.removeEventListener('click', this.handleDocumentClick)
    } else if (trigger === 'hover') {
      this.referenceDom.removeEventListener('mouseenter', this.onMouseOver)
      this.referenceDom.removeEventListener('mouseleave', this.onMouseOut)

      if (this.popper === null) return

      this.popper.removeEventListener('mouseenter', this.onMouseOver)
      this.popper.removeEventListener('mouseleave', this.onMouseOut)
    }
  }

  handleReferenceDomClick = () => {
    this.setState(
      {
        showPopper: !this.state.showPopper,
      },
      () => {
        if (this.state.showPopper) {
          this.onMouseOver()
        } else {
          this.onMouseOut()
        }
      }
    )
  }

  handleDocumentClick = e => {
    const element = ReactDOM.findDOMNode(this)

    if (
      !element ||
      element.contains(e.target) ||
      !this.referenceDom ||
      this.referenceDom.contains(e.target) ||
      !this.popper ||
      this.popper.contains(e.target)
    ) {
      return
    }

    this.setState({
      showPopper: false,
    })
  }

  onMouseOver = () => {
    clearTimeout(this.timer)

    this.setState(
      {
        showPopper: true,
      },
      () => {
        this.popperJS = new Popper(this.referenceDom, this.popper, {
          placement: this.props.position,
          positionFixed: true,
        })
      }
    )
  }

  onMouseOut = () => {
    this.timer = setTimeout(() => {
      this.setState({
        showPopper: false,
      })
      this.popperJS.destroy()
      this.popperJS = null
    }, 200)
  }

  get popperStyle() {
    const { style } = this.props
    const { showPopper } = this.state
    const showStyle = !showPopper
      ? {
        display: 'none',
      }
      : {}

    return Object.assign({}, style, showStyle)
  }

  render() {
    const { children, position, title, content } = this.props

    return (
      <span>
        <div
          ref={ref => (this.popper = ref)}
          className={classnames('popover', `popover-${position}`)}
          style={this.popperStyle}
        >
          <div className='popover-arrow' />
          {title && <div className='popover-title'>{title}</div>}
          <div className='popover-content'>{content}</div>
        </div>
        {React.cloneElement(React.Children.only(children), {
          ref: ref => (this.reference = ref),
        })}
      </span>
    )
  }
}
