import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'
import cx from 'classnames'

export const styles = ({ space, color, fontFamily, fontSize }) => ({
  table: {
    tableLayout: 'fixed',
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: space[4],
  },
  tableHead: {
    borderTop: [[1, color.border, 'solid']],
    borderBottom: [[1, color.border, 'solid']],
  },
  cellHeading: {
    color: '#919cb3',
    paddingTop: 14,
    paddingBottom: 14,
    textAlign: 'left',
    fontFamily: fontFamily.base,
    fontWeight: 'bold',
    fontSize: 14,
    whiteSpace: 'nowrap',
  },
  name: {
    width: '20%',
  },
  description: {
    width: '25%',
  },
  type: {
    width: '15%',
  },
  default: {
    width: 'auto',
  },
  cell: {
    color: color.base,
    paddingTop: 18,
    paddingRight: 18,
    paddingBottom: 18,
    verticalAlign: 'top',
    fontFamily: fontFamily.base,
    fontSize: fontSize.small,
    '&:last-child': {
      isolate: false,
      width: '99%',
      paddingRight: 0,
    },
    '& p:last-child': {
      isolate: false,
      marginBottom: 0,
    },
  },
})

export function TableRenderer({ classes, columns, rows, getRowKey }) {
  return (
    <table className={classes.table}>
      <thead className={classes.tableHead}>
        <tr>
          {columns.map(({ caption, className }) => (
            <th
              key={caption}
              className={cx(classes.cellHeading, classes[className])}
            >
              {caption}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <td key={index} className={classes.cell}>
                {render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

TableRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string.isRequired,
      render: PropTypes.func.isRequired,
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRowKey: PropTypes.func.isRequired,
}

export default Styled(styles)(TableRenderer)
