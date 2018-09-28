import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Card,
  ButtonGroup,
  Button,
  Icon,
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from 'react-impression'
import * as actions from '../reducer'
import { ruleType } from '../config'

class FilterContent extends Component {
  static propTypes = {
    ruleId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    setRuleId: PropTypes.func,
    handleAddToggleClick: PropTypes.func,
  }

  componentDidMount() {}
  handleRuleChange = val => {
    const { setRuleId } = this.props
    setRuleId(val)
  }

  render() {
    const { ruleId, handleAddToggleClick } = this.props
    return (
      <Card block>
        <ButtonGroup
          theme='default'
          activeKey={ruleId}
          onSelect={this.handleRuleChange}
        >
          {ruleType.map(item => (
            <Button eventKey={item.id} key={item.id}>
              {item.type}
            </Button>
          ))}
        </ButtonGroup>
        <Button
          theme='default'
          className='offset-l'
          onClick={handleAddToggleClick}
        >
          <Icon type='plus' className='pull-right' />新增任务
        </Button>
        <div className='pull-right'>
          <InputGroup>
            <InputGroupInput placeholder='任务名称' />
            <InputGroupButton theme='primary'>搜索</InputGroupButton>
          </InputGroup>
        </div>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  ruleId: state.table.ruleId,
})

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FilterContent)
