import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Modal,
  Form,
  FormGroup,
  FormControlLabel,
  Input,
  RadioGroup,
  Radio,
  Col,
} from 'react-impression'
import './AddModal.scss'

export default class AddModal extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  state = {}

  render() {
    const { isOpen, onClose } = this.props
    return (
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <Modal.Header>
          <Button close onClick={onClose}>
            &times;
          </Button>
          <h5 className='no-margin'>新增任务积分模版</h5>
        </Modal.Header>
        <Modal.Body style={{ overflowY: 'visible' }}>
          <Form type='horizontal'>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>规则说明:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>任务对象:</FormControlLabel>
              </Col>
              <Col col='10'>
                <RadioGroup style={{ lineHeight: '33px' }}>
                  <Radio value={1}>物流商户</Radio>
                  <Radio value={2}>达达骑士</Radio>
                </RadioGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>积分类型:</FormControlLabel>
              </Col>
              <Col col='10'>
                <RadioGroup style={{ lineHeight: '33px' }}>
                  <Radio value={11}>拜访积分</Radio>
                  <Radio value={12}>培训积分</Radio>
                  <Radio value={13}>接单积分</Radio>
                </RadioGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>拜访1次得:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' style={{ width: 200 }} />
                <span styleName='text'>分</span>
                <span styleName='textlight'>（精确到1位小数）</span>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>积分上限:</FormControlLabel>
              </Col>
              <Col col='10'>
                <RadioGroup style={{ lineHeight: '33px' }}>
                  <Radio value={1}>有</Radio>
                  <Radio value={2}>无</Radio>
                </RadioGroup>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-center'>
                <FormControlLabel>上限值为:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' style={{ width: 200 }} />
                <span styleName='text'>分</span>
                <span styleName='textlight'>（精确到1位小数）</span>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer className='text-center'>
          <Button>新增</Button>
          <Button onClick={onClose}>取消</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
