import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import * as R from 'ramda'
import { DebounceInput } from 'react-debounce-input'
import Ico from '../Ico'
import Tag from '../Tag'
import Trigger from '../Trigger'

function TreeSelect() {
  return (
    <>
      <Trigger
        showAction='none'
        hideAction='none'
        popupVisible={showOption}
        onPopupVisibleChange={this.hideOptionsHandler}
        stretch={stretch}
        transitionName='scale'
        popup={
          <div className={classnames(this.wrapClass, 'select-options-wrap')}>
            {searchable && multiple && (
              <div className='select-search-wrap'>
                <DebounceInput
                  debounceTimeout={500}
                  value={queryText}
                  onChange={e => this.handleQuery(e)}
                  className={classnames('select-search-input')}
                />
                <Ico type='search' className='select-search' />
              </div>
            )}
            <ul
              className={classnames('select-options')}
              ref={ref => (this.selectInner = ref)}
            >
              {children}
              {this.emptyText && (
                <p className='select-empty'>{this.emptyText}</p>
              )}
            </ul>
          </div>
        }
      >
        <div
          style={style}
          className={classnames(
            'select',
            `dada-select-${realSize}`,
            {
              'select-multiple': multiple,
              disabled,
              open: showOption && !searchable,
              'select-open': showOption,
            },
            className
          )}
          onMouseEnter={this.handleShowClear}
          onMouseLeave={this.handleHideClear}
        >
          {multiple && (
            <div className='select-tags' onClick={this.toggleOptionsHandle}>
              {selectedItem.length <= 0 && (
                <span
                  className={classnames('select-placeholder', {
                    'select-placeholder-xs': size === 'xs',
                  })}
                >
                  {placeholder}
                </span>
              )}
              {selectedItem.length > 0 &&
                selectedItem.map(item => {
                  const val = item.value
                  return (
                    <Tag
                      key={item.value}
                      size={size === 'xs' ? 'sm' : 'md'}
                      theme='default'
                      onClose={e => this.selectMultipleDelete(val, e)}
                      disabled={disabled}
                      closable
                    >
                      {item.name}
                    </Tag>
                  )
                })}
            </div>
          )}
          {!multiple && (
            <input
              type='text'
              value={queryText}
              readOnly={!searchable || (searchable && !showOption)}
              placeholder={currentPlaceholder}
              disabled={disabled}
              className='select-selection'
              onChange={e => this.handleQuery(e)}
              onClick={this.toggleOptionsHandle}
              onFocus={searchable && this.focusHandler}
              ref={ref => (this.refMain = ref)}
            />
          )}
          {(!showClear || !clearable) &&
            (!searchable || multiple || (searchable && !showOption)) && (
            <Ico
              type='angle-down'
              className='select-addon'
              onClick={this.toggleOptionsHandle}
            />
          )}
          {(!showClear || !clearable) &&
            searchable &&
            showOption &&
            !multiple && (
            <Ico
              type='search'
              className='select-addon'
              onClick={this.toggleOptionsHandle}
            />
          )}
          {clearable && showClear && !multiple && (
            <Ico
              type='times-circle'
              className='select-addon'
              onClick={this.handleClearSelect}
            />
          )}
        </div>
      </Trigger>
    </>
  )
}

export default TreeSelect
