import React from 'react'
import PropTypes from 'prop-types'
import TabButton from 'rsg-components/TabButton'

const CodeTabButton = props => <TabButton {...props}>查看源码</TabButton>

CodeTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool,
}

export default CodeTabButton
