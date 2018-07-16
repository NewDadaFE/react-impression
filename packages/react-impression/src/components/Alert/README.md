### Examples

**Basic**

```js
class AlertView extends React.Component {
  constructor() {
    super()
    this.state = {
      showAlert1: false,
      showAlert2: false,
    }
    this.toggleAlert1Handle = this.toggleAlert1Handle.bind(this)
    this.toggleAlert2Handle = this.toggleAlert2Handle.bind(this)
  }
  toggleAlert1Handle() {
    this.setState({
      showAlert1: !this.state.showAlert1,
    })
  }
  toggleAlert2Handle() {
    this.setState({
      showAlert2: !this.state.showAlert2,
    })
  }
  render() {
    let { showAlert1, showAlert2 } = this.state
    return (
      <div>
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
;<AlertView />

