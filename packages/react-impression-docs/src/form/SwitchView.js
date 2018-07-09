import React from 'react'
import PropTypes from 'prop-types'
import { Card, Switch, Form } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const SwitchView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h5>Switch</h5>
        <Card>
          <Card.Block>
            <Form grid>
              <Form.Group col='6'>
                <label>Default</label>
                <Switch defaultChecked />
              </Form.Group>
              <Form.Group>
                <label>Disabled</label>
                <Switch disabled defaultChecked />
              </Form.Group>
            </Form>
          </Card.Block>
          <Highlight>
            {'import { Switch } from "impression-react";\n\n'}
            {'<Switch defaultChecked/>\n'}
            {'<Switch disabled defaultChecked />'}
          </Highlight>
        </Card>
        <h5 className='text-secondary'>API</h5>
        <ul>
          <li>Switch.getValue(ref)</li>
        </ul>
        <CommenTable
          data={[
            ['defaultChecked', '是否默认选中', 'boolean', ''],
            ['disabled', '是否可以点击', 'boolean', ''],
            ['onChange', '状态变更回调函数', 'function', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

SwitchView.propTypes = {
  routes: PropTypes.array,
}

export default SwitchView
