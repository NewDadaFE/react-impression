import React from 'react'
import PropTypes from 'prop-types'
import TabButton from 'rsg-components/TabButton'

const UsageTabButton = props => {
  const component = props.props
  const showButton =
    component.props || (component.methods && component.methods.length > 0)
  return showButton ? (
    <TabButton {...props}>{props.active ? '隐藏' : '查看'}参数</TabButton>
  ) : null
}

UsageTabButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  props: PropTypes.shape({
    props: PropTypes.array,
    methods: PropTypes.array,
  }).isRequired,
  active: PropTypes.bool,
}

export default UsageTabButton
