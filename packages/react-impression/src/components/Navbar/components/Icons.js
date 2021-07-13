import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Ico from '../../Ico'
import Trigger from '../../Trigger'

function Icons({ dataSource }) {
  const getIconItem = data => {
    const { type, iconUrl, children } = data
    return (
      <Trigger
        key={type || iconUrl}
        popupClassName='icons-trigger-container'
        showAction='hover'
        stretch='auto'
        placement='bottom-end'
        popup={() => children}
      >
        <div
          className={classNames('navbar-operation-icons-item')}
          key={type || iconUrl}
        >
          {type ? <Ico type={type} /> : <img src={iconUrl} alt='' />}
        </div>
      </Trigger>
    )
  }

  return (
    <div className={classNames('navbar-operation-icons')}>
      {dataSource.map(itm => getIconItem(itm))}
    </div>
  )
}

Icons.propTypes = {
  /**
   * 小图标数据
   */
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      iconUrl: PropTypes.string,
      children: PropTypes.any,
    })
  ),
}

export default Icons
