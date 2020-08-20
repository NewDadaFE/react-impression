import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Trigger from '../Trigger'
import Ico from '../Ico'

const defaultOptionKey = { label: 'label', value: 'label' }

Search.propTypes = {
  /**
   * 选项容器宽度是否伸缩
   */
  optionsWidthStretch: PropTypes.bool,
  /**
   * 输入框改变的回调，参数列表：keyword
   */
  onChange: PropTypes.func,
  /**
   * 发起查询回调，参数列表：keyword
   */
  onSearch: PropTypes.func,
  /**
   * 选中回调，参数列表：value, item
   */
  onSelect: PropTypes.func,
  /**
   * 自定义option的键名称
   */
  optionKey: PropTypes.exact({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  /**
   * 自定义结果选项，参数列表：item, data, index
   */
  optionRender: PropTypes.func,
}

Search.defaultProps = {
  optionsWidthStretch: false,
  optionKey: defaultOptionKey,
}

function Search(props) {
  // 搜索关键词
  const [keyword, setKeyword] = useState('')
  // 搜索结果列表
  const [result, setResult] = useState([])
  const { onChange, onSearch, onSelect, optionRender, optionKey } = props

  // 监听keyword变化，发起搜索
  useEffect(
    () => {
      const searchRes = onSearch(keyword)
      if (
        searchRes.constructor.name === 'Promise' &&
        typeof searchRes.then === 'function'
      ) {
        searchRes.then(res => setResult(res))
        return
      }
      setResult(searchRes)
    },
    [keyword, onSearch]
  )

  return (
    <Trigger
      action='click'
      popupClassName='dada-search-popup'
      popup={result.map((item, index) => {
        // 如果有自定义渲染方法，传入：数据项、数据列表、下标
        if (optionRender && typeof optionRender === 'function') {
          const customOption = optionRender(item, result, index)
          // 自定义选项组件点击事件重载
          return React.cloneElement(customOption, {
            onClick: e => {
              customOption.props.onClick && customOption.props.onClick(e)
              onSelect &&
                onSelect(item[optionKey.value || defaultOptionKey.value], item)
            },
          })
        }
        return (
          <div key={index} className='dada-search-option'>
            <span className='dada-search-option-text'>
              {item[optionKey.label || defaultOptionKey.label]}
            </span>
          </div>
        )
      })}
      stretch={props.optionsWidthStretch ? 'auto' : 'sameWidth'}
    >
      <div className='dada-search'>
        <Ico className='dada-search-addon' type='search' />
        <input
          type='text'
          value={keyword}
          onChange={e => {
            setKeyword(e.target.value)
            onChange && onChange(e.target.value)
          }}
        />
        <Button>搜索</Button>
      </div>
    </Trigger>
  )
}

export default Search
