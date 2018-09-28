import React, { PropTypes } from 'react'
import { InlineSelect, InlineSelectOption } from 'react-impression'

function InlineFilter(props) {
  const { data, onChange, label, value } = props
  return (
    <div>
      <InlineSelect label={label} col={1} value={value} onChange={onChange}>
        {!!data.length &&
          data.map(item => (
            <InlineSelectOption value={item.id} key={item.id}>
              {item.name}
            </InlineSelectOption>
          ))}
      </InlineSelect>
    </div>
  )
}

InlineFilter.propTypes = {
  data: PropTypes.array,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default InlineFilter
