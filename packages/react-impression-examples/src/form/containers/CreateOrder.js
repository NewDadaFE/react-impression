import React from 'react'
import {
  Card,
  CardBlock,
  CardHeader,
  Form,
  FormGroup,
  Col,
  FormControlLabel,
  Input,
  Select,
  SelectOption,
  Checkbox,
  InlineSelect,
  InlineSelectOption,
  ButtonGroup,
  Button,
  Upload,
  Icon,
} from 'react-impression'
import styles from './CreateOrder.module.scss'
import Counter from '../components/Counter'
import classNames from 'classnames'

const address = ['地址1', '地址2', '地址3']
const insuranceType = ['1元保价', '2元保价', '3元保价']

export default class CreateOrder extends React.Component {
  state = {
    deliveryTimeType: 1,
    insurance: 1,
    previewUrl: '',
  }

  handleDeliveryTimeType = val => {
    this.setState({
      deliveryTimeType: val,
    })
  }

  handleInsurance = val => {
    this.setState({
      insurance: val,
    })
  }

  handlePreviewChange = event => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      console.log('选择了文件：', event.currentTarget.value)
      const reader = new window.FileReader()
      reader.onload = e => {
        this.setState({
          previewUrl: e.currentTarget.result,
        })
      }
      reader.readAsDataURL(file)
    }
  }

  render() {
    const { deliveryTimeType, insurance } = this.state

    return (
      <Card>
        <CardHeader className='text-left'>第二个例子</CardHeader>
        <CardBlock>
          <Form type='horizontal'>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>收货地址:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Select
                  className={styles['address-select']}
                  searchable
                  placeholder='请填写收货地址'
                >
                  {address.map((each, index) => (
                    <SelectOption value={each} key={index}>
                      {each}
                    </SelectOption>
                  ))}
                </Select>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>门牌号:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' style={{ width: 500 }} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>收货人姓名:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' style={{ width: 200 }} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>收货人电话:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='text' style={{ width: 200 }} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='10' offset='2'>
                <Checkbox>保存为默认地址</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col
                col='2'
                className={classNames('text-right', styles['inline-label'])}
              >
                <strong>类型:</strong>
              </Col>
              <Col col='5' className={styles['inline-content']}>
                <InlineSelect
                  defaultValue={'1'}
                  onChange={this.selectZoneHandle}
                >
                  <InlineSelectOption value='1'>食品饮料</InlineSelectOption>
                  <InlineSelectOption value='2'>鲜花</InlineSelectOption>
                  <InlineSelectOption value='3'>蛋糕</InlineSelectOption>
                  <InlineSelectOption value='4'>文件</InlineSelectOption>
                  <InlineSelectOption value='5'>水果生鲜</InlineSelectOption>
                  <InlineSelectOption value='6'>证照证件</InlineSelectOption>
                  <InlineSelectOption value='7'>数码家电</InlineSelectOption>
                  <InlineSelectOption value='8'>服饰鞋帽</InlineSelectOption>
                  <InlineSelectOption value='9'>其他</InlineSelectOption>
                </InlineSelect>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>加价:</FormControlLabel>
              </Col>
              <Col col='4'>
                <Counter />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>备注:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Input type='textarea' style={{ height: 90, width: 500 }} />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>发货时间:</FormControlLabel>
              </Col>
              <Col col='3'>
                <ButtonGroup
                  theme='default'
                  activeKey={deliveryTimeType}
                  onSelect={this.handleDeliveryTimeType}
                >
                  <Button eventKey={0}>立即发货</Button>
                  <Button eventKey={1}>预约时间</Button>
                </ButtonGroup>
              </Col>
              {deliveryTimeType === 1 && (
                <span>
                  <Input
                    type='date'
                    defaultValue='2016-05-29'
                    style={{ width: 224 }}
                  />
                </span>
              )}
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>保价:</FormControlLabel>
              </Col>
              <Col col='3'>
                <ButtonGroup
                  theme='default'
                  activeKey={insurance}
                  onSelect={this.handleInsurance}
                >
                  <Button eventKey={0}>不保价</Button>
                  <Button eventKey={1}>保价</Button>
                </ButtonGroup>
              </Col>
              {insurance === 1 && (
                <Select placeholder='请选择保价价格'>
                  {insuranceType.map((each, index) => (
                    <SelectOption value={each} key={index}>
                      {each}
                    </SelectOption>
                  ))}
                </Select>
              )}
            </FormGroup>
            <FormGroup>
              <Col col='2' className='text-right'>
                <FormControlLabel>上传物品照片:</FormControlLabel>
              </Col>
              <Col col='10'>
                <Upload
                  src={this.state.previewUrl}
                  preview
                  message='上传物品照片'
                  onChange={this.handlePreviewChange}
                >
                  <Icon type='plus' />
                </Upload>
              </Col>
            </FormGroup>
            <FormGroup style={{ justifyContent: 'center' }}>
              <Button theme='default' className={styles['cancel-button']}>
                取消
              </Button>
              <Button theme='primary'>保存</Button>
            </FormGroup>
          </Form>
        </CardBlock>
      </Card>
    )
  }
}
