import React from 'react'
import PropTypes from 'prop-types'
import {
  Input,
  Modal,
  ModalHeader,
  Select,
  SelectOption,
  ModalBody,
  ModalFooter,
  Col,
  Form,
  Button,
  FormGroup,
  FormControlLabel,
} from 'react-impression'

function Edit(props) {
  const { show, toggle } = props
  return (
    <Modal isOpen={show}>
      <ModalHeader>
        <Button close onClick={toggle}>
          &times;
        </Button>
        编辑标题
      </ModalHeader>
      <ModalBody>
        <Form type='horizontal'>
          <FormGroup>
            <Col col='3' className='text-right'>
              <FormControlLabel>城市:</FormControlLabel>
            </Col>
            <Col col='7'>
              <Input type='text' value='上海' disabled />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col col='3' className='text-right'>
              <FormControlLabel>任务名称:</FormControlLabel>
            </Col>
            <Col col='7'>
              <Input type='text' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col col='3' className='text-right'>
              <FormControlLabel>数据来源:</FormControlLabel>
            </Col>
            <Col col='7'>
              <Input type='text' />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col col='3' className='text-right'>
              <FormControlLabel>时间类型:</FormControlLabel>
            </Col>
            <Col col='7'>
              <Select style={{ width: '100%' }}>
                <SelectOption value='1'>工作日</SelectOption>
                <SelectOption value='2'>自然日</SelectOption>
              </Select>
            </Col>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button theme='default' onClick={toggle}>
          关闭
        </Button>
        <Button theme='primary'>保存</Button>
      </ModalFooter>
    </Modal>
  )
}

Edit.propTypes = {
  toggle: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
}
export default Edit
