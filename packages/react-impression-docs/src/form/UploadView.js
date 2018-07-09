import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Row,
  Col,
  Input,
  Upload,
  Icon,
  Button,
} from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

export default class UploadView extends Component {
  static propTypes = {
    routes: PropTypes.array,
  }
  // 预览：获取上传文件
  getUploadFileHandle = () => {
    // console.log(Upload.getValue(this.refs.upload));
  }
  // 获取文件
  getFileHandle = () => {
    // console.log(Input.getValue(this.refs.file));
  }
  onChangeHandle = () => {
    console.log('ddd')
  }
  render() {
    return (
      <div>
        <Breadcrumb routes={this.props.routes} />
        <Card block noborder>
          <h3>Basic</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Input ref='file' type='file' />
                </Col>
                <Col>
                  <Input
                    type='file'
                    placeholder='请上传资质证明'
                    onChange={this.onChangeHandle}
                  />
                </Col>
                <Col>
                  <Upload btnText='附件' btnStyle='primary' />
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'import { Upload } from "impression-react";\n\n'}
              {'<Input type="file"/>\n'}
              {'<Input type="file" placeholder="请上传资质证明"/>\n'}
              {'<Upload btnText="附件" btnStyle="primary"/>'}
            </Highlight>
          </Card>
          <h3>Preview</h3>
          <Card>
            <Card.Block>
              <Row>
                <Col>
                  <Upload ref='upload' preview />
                </Col>
                <Col>
                  <Upload preview message='上传图片'>
                    <Icon type='plus' />
                  </Upload>
                </Col>
                <Col>
                  <Upload
                    src='https://nzfq0mp27.qnssl.com/0.1.18/homeV3/images/enjoy.jpg'
                    preview
                  />
                </Col>
              </Row>
            </Card.Block>
            <Highlight>
              {'<Upload preview /> \n'}
              {
                '<Upload preview message="上传图片"><Icon type="plus" /></Upload>\n'
              }
              {'<Upload src="..." preview />'}
            </Highlight>
          </Card>
          <Card block>
            <Button onClick={this.getFileHandle}>获取</Button>
          </Card>
          <h5>Upload API</h5>
          <ul>
            <li>
              <code>Upload.getValue(ref)</code>
            </li>
          </ul>
          <CommenTable
            data={[
              ['btnText', '按钮文字', 'string', '浏览'],
              ['placeholder', '占位文字', 'string', '请选择要上传的附件'],
              ['btnStyle', '按钮样式', 'default', ''],
              ['preview', '是否可预览', 'boolean', 'false'],
              ['message', '提示信息', 'string', ''],
              ['src', '文件路径', 'string', ''],
              ['className', '样式', 'string', ''],
            ]}
          />
        </Card>
      </div>
    )
  }
}
