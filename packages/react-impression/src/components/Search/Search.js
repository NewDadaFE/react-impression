import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

const Search = props => {
  return (
    <div>
      <i className='fa fa-search' />
      <input type='text' />
      <Button>搜索</Button>
    </div>
  )
}

Search.propTypes = {}

export default Search
