import React from 'react'
import PropTypes from 'prop-types'
import { Icon, Card, Breadcrumb } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import MyBreadcrumb from 'src/app/components/Breadcrumb'

const BreadcrumbView = ({ routes }) => {
  return (
    <div>
      <MyBreadcrumb routes={routes} />
      <Card block noborder>
        <h3>Examples</h3>
        <Card>
          <Card.Block>
            <Breadcrumb className='no-padding'>
              <a href='javascript:void(0);'>Home</a>
              <a href='javascript:void(0);'>User Center</a>
              <span>Basic Information</span>
            </Breadcrumb>
          </Card.Block>
          <Highlight>
            {'import { Breadcrumb } from "impression-react";\n\n'}
            {'<Breadcrumb>\n'}
            {' <a href="javascript:void(0);">首页</a>\n'}
            {' <a href="javascript:void(0);">财务管理</a>\n'}
            {' <span>收入</span>\n'}
            {'</Breadcrumb>'}
          </Highlight>
        </Card>
        <h3>Arrow separator</h3>
        <Card>
          <Card.Block>
            <Breadcrumb className='no-padding' separator='arrow'>
              <a href='javascript:void(0);'>
                <Icon type='home' left />Home
              </a>
              <a href='javascript:void(0);'>
                <Icon type='user' left />User Center
              </a>
              <span>
                <Icon type='cog' left />Basic Information
              </span>
            </Breadcrumb>
          </Card.Block>
          <Highlight>
            {'<Breadcrumb separator="arrow">...</Breadcrumb>'}
          </Highlight>
        </Card>
        <h3 className='text-secondary'>API</h3>
        <CommenTable
          data={[
            ['separator', '设置分隔符，可选值为 arrow', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

BreadcrumbView.propTypes = {
  routes: PropTypes.array,
}

export default BreadcrumbView
