import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Pagination } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class PaginationView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  constructor(prop, context) {
    super(prop, context)

    this.state = {
      totalPage: 5,
      activePage: 3,
      totalPage2: 1,
      activePage2: 1,
    }
  }
  onSelectHandle = activePage => {
    this.setState({
      activePage,
    })
  }
  onSelectHandle2 = activePage2 => {
    this.setState({
      activePage2,
    })
  }
  render() {
    let { totalPage, activePage, totalPage2, activePage2 } = this.state

    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h5>Examples</h5>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Pagination
                    onSelect={this.onSelectHandle}
                    scope={2}
                    totalPage={totalPage}
                    activePage={activePage}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Pagination
                    onSelect={this.onSelectHandle2}
                    scope={2}
                    totalPage={totalPage2}
                    activePage={activePage2}
                  />
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'import { Pagination } from "impression-react";\n\n'}
              {'<Pagination  scope={2} totalPage={10} activePage={4} />\n'}
              {'<Pagination  scope={2} totalPage={5} activePage={3} />'}
            </Highlight>
          </Card>
          <h5>Pagination API</h5>
          <CommenTable
            data={[
              ['scope', '设置前后延伸几页', 'number', '2'],
              ['activePage', '当前在第几页', 'number', '1'],
              ['totalPage', '总页数', 'number', ''],
              ['ellipsis', '是否显示省略号', 'boolean', 'true'],
              ['onSelect', '选中回调函数', 'function', ''],
              ['className', '自定义样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
