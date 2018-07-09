import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Button, Alert } from 'react-impression'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class AlertView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  constructor(props, context) {
    super(props, context)

    this.state = {
      showAlert1: false,
      showAlert2: false,
    }
  }
  toggleAlert1Handle = () => {
    this.setState({
      showAlert1: !this.state.showAlert1,
    })
  }
  toggleAlert2Handle = () => {
    this.setState({
      showAlert2: !this.state.showAlert2,
    })
  }
  render() {
    let { showAlert1, showAlert2 } = this.state

    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h3>Basic</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Button
                    theme='primary'
                    outline
                    onClick={this.toggleAlert1Handle}
                  >
                    default
                  </Button>
                </Col>
                <Col>
                  <Button
                    theme='secondary'
                    outline
                    onClick={this.toggleAlert2Handle}
                  >
                    danger
                  </Button>
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'import { Alert } from "impression-react";\n\n'}
              {'<Alert>姓名不能为空！</Alert>\n'}
              {
                '<Alert btnText="关闭"  type="danger">请先选择所属城市！</Alert>'
              }
            </Highlight>
          </Card>
        </Card>
        {showAlert1 && (
          <Alert onClick={this.toggleAlert1Handle}>姓名不能为空！</Alert>
        )}
        {showAlert2 && (
          <Alert btnText='关闭' onClick={this.toggleAlert2Handle} type='danger'>
            请先选择所属城市！
          </Alert>
        )}
      </div>
    )
  }
}
