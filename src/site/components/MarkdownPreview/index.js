import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import styles from './index.scss'

const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  tables: true,
})

const renderMarkdown = mk => {
  return { __html: marked(mk) }
}

const MarkdownPreview = props => {
  const { markdown } = props

  return (
    <div
      className={styles['markdown-body']}
      dangerouslySetInnerHTML={renderMarkdown(markdown)}
    />
  )
}

MarkdownPreview.propTypes = {
  markdown: PropTypes.string,
}

export default MarkdownPreview
