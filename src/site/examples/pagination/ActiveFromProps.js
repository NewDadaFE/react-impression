/* sourceCode:start */
import React, { PureComponent } from 'react'
import { Pagination, Row, Col, Button } from 'react-impression'

class FromProps extends PureComponent {
  state = {
    page: 1,
  }

  onClick = () => {
    this.setState({
      page: this.state.page + 1,
    })
  }

  onSelect = page => {
    this.setState(
      {
        page: page,
      },
      () => {
        setTimeout(() => {
          this.setState({
            page: this.state.page + 1,
          })
        }, 3000)
      }
    )
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Pagination
              totalCount={500}
              activePage={this.state.page}
              onSelect={this.onSelect}
            />
          </Col>
          <Col>
            <Button onClick={this.onClick}>activePage + 1</Button>
          </Col>
        </Row>
      </div>
    )
  }
}
/* sourceCode:end */

FromProps.title = 'activePage从props传入的方式'
FromProps.desc = `> props添加动态的activePage`

export default FromProps
