import React from 'react'
import PropTypes from 'prop-types'
import { Table, Input, Button } from 'react-impression'
import styles from './TableEdit.scss'

function TableInfo(props) {
  const { data } = props
  const columns = [
    {
      Header: '功能',
      prop: 'name',
      width: 130,
    },
    {
      Header: '生效条件',
      prop: 'option',
      width: 200,
      Cell: () => (
        <div>
          接单率不超过<Input type='text' className={styles.input} />%
        </div>
      ),
    },
    {
      Header: '默认值',
      prop: 'default',
      width: 150,
      Cell: item => (
        <div>
          <Input type='text' className={styles.input} />
        </div>
      ),
    },
    {
      Header: '百分比范围',
      prop: 'percent',
      width: 200,
      Cell: () => {
        return (
          <div>
            <Input type='text' className={styles.input} />
            ~
            <Input type='text' className={styles.input} />
          </div>
        )
      },
    },
    {
      Header: '自动重置时间',
      prop: 'time',
      width: 200,
      Cell: () => <Input type='second' />,
    },
    {
      Header: '备注',
      prop: 'content',
      width: 200,
      Cell: () => <Input type='textarea' className={styles.textarea} />,
    },
  ]

  return (
    <div>
      <Table data={data} columns={columns} />
      <div className='text-center offset-t'>
        <Button className='offset-r'>保存</Button>
        <Button theme='default' className='offset-l'>
          取消
        </Button>
      </div>
    </div>
  )
}

TableInfo.propTypes = {
  data: PropTypes.array.isRequired,
}

export default TableInfo
