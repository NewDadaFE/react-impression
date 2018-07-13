import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import marked from 'marked'
import './index.scss'

const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
})

const renderMarkdown = mk => {
  return { __html: marked(mk) }
}

const MarkdownPreview = props => {
  const { markdown, name } = props
  const className = classnames(['api-container', 'markdown-body'])

  return (
    <div>
      {name && <h5>{name}</h5>}
      <div
        className={className}
        dangerouslySetInnerHTML={renderMarkdown(markdown)}
      />
    </div>
  )
}

MarkdownPreview.propTypes = {
  markdown: PropTypes.string,
  name: PropTypes.string,
}

export default MarkdownPreview
