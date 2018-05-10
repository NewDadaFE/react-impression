import React from 'react'
import PropTypes from 'prop-types'
import loadLanguages from 'prismjs/components/index'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import MarkdownPreview from '../MarkdownPreview'

loadLanguages(['jsx'])

const Card = ({ component: Component, cardClass, ...others }) => {
  const sourceCode = Component._sourceCode || ''
  const code = Prism.highlight(sourceCode, Prism.languages.jsx, 'jsx')

  return (
    <div {...others}>
      <div className={cardClass}>
        <Component />
      </div>
      <h2>{Component.title}</h2>
      <MarkdownPreview markdown={Component.desc} />

      <pre>
        <code className='language-jsx'>
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </code>
      </pre>
    </div>
  )
}

Card.propTypes = {
  component: PropTypes.any,
  cardClass: PropTypes.string,
}

export default Card
