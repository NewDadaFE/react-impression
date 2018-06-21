import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const PageBlock = ({ page, onClick, active, className }) => {
  let finalClassName = classnames(
    'page-item',
    `page-item-${page}`,
    { active },
    className
  )

  const handleClick = () => {
    onClick(page)
  }

  return (
    <li className={finalClassName} onClick={handleClick}>
      <a className='page-link' href='javascript:void(0);'>
        {page}
      </a>
    </li>
  )
}

PageBlock.propTypes = {
  page: PropTypes.number,
  active: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default PageBlock
