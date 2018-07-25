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
    const { showAlert1, showAlert2 } = this.state
    return (
      <div>
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
              theme='default'
              outline
              onClick={this.toggleAlert2Handle}
            >
              <span className='text-danger'>danger</span>
            </Button>
          </Col>
        </Row>
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

