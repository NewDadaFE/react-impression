import React from 'react'
import PropTypes from 'prop-types'
import loadLanguages from 'prismjs/components/index'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'

loadLanguages(['jsx'])

const Card = ({ component: Component }) => {
  const sourceCode = Component._sourceCode || ''
  const code = Prism.highlight(sourceCode, Prism.languages.jsx, 'jsx')

  return (
    <div>
      <Component />
      <h2>{Component.title}</h2>
      <p>{Component.desc}</p>

      <pre>
        <code className="language-jsx">
          <div dangerouslySetInnerHTML={{ __html: code }} />
        </code>
      </pre>
    </div>
  )
}

Card.propTypes = {
  component: PropTypes.any
}

export default Card
