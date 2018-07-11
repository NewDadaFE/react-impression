import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'
import styles from './index.module.scss'
import MarkdownPreview from '../MarkdownPreview'

class Card extends React.Component {
  state = {
    codeExpand: false,
  }

  static propTypes = {
    component: PropTypes.any,
    cardClass: PropTypes.string,
    expand: PropTypes.bool,
  }

  handleCodeExpand = () => {
    this.setState({ codeExpand: !this.state.codeExpand })
  }

  render() {
    const { component: Component, cardClass, expand, ...others } = this.props

    const codeExpand = this.state.codeExpand || expand
    const sourceCode = Component._sourceCode || ''
    const code = Prism.highlight(sourceCode, Prism.languages.jsx, 'jsx')

    const codeClass = classnames({
      [styles['api-container']]: true,
      [styles['api-container-expand']]: codeExpand,
    })

    return (
      <div {...others}>
        <h5>{Component.title}</h5>
        <div className={classnames(styles['card-wrapper'], cardClass)}>
          <Component />
        </div>
        <MarkdownPreview markdown={Component.desc} />
        <div className={styles['code-wrapper']}>
          {!codeExpand && <div className={styles['split-line']} />}
          <span className={styles['code-expand-icon']}>
            <img
              alt='expand code'
              src='https://fe.imdada.cn/react-impression-v2/images/icon/open-code.svg'
              className={
                codeExpand
                  ? styles['code-expand-icon-hide']
                  : styles['code-expand-icon-show']
              }
              onClick={this.handleCodeExpand}
            />
            <img
              alt='expand code'
              src='https://fe.imdada.cn/react-impression-v2/images/icon/close-code.svg'
              className={
                codeExpand
                  ? styles['code-expand-icon-show']
                  : styles['code-expand-icon-hide']
              }
              onClick={this.handleCodeExpand}
            />
          </span>
          <div className={codeClass}>
            <pre className='language-jsx'>
              <code className='language-jsx'>
                <div dangerouslySetInnerHTML={{ __html: code }} />
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
