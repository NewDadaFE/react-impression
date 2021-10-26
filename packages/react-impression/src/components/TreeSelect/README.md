### 示例

**基本用法**

```js
const data = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',

        children: [
          {
            title: '0-0-0-0',
            key: '0-0-0-0',
            disabled: true,
            children: [
              { title: '0-0-0-0-0', key: '0-0-0-0-0' },
              {
                title: '0-0-0-0-1',
                key: '0-0-0-0-1',
                children: [
                  { title: '0-0-0-0-1-0', key: '0-0-0-0-1-0' },
                  {
                    title: '0-0-0-0-1-1',
                    key: '0-0-0-0-1-1',
                    disabled: true,
                    children: [
                      { title: '0-0-0-0-1-1-0', key: '0-0-0-0-1-1-0' },
                      { title: '0-0-0-0-1-1-1', key: '0-0-0-0-1-1-1' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: '0-0-0-1',
            key: '0-0-0-1',
          },
          {
            title: '0-0-0-2',
            key: '0-0-0-2',
            disabled: true,

            children: [
              { title: '0-0-0-2-0', key: '0-0-0-2-0' },
              { title: '0-0-0-2-1', key: '0-0-0-2-1' },
              { title: '0-0-0-2-2', key: '0-0-0-2-2' },
              { title: '0-0-0-2-3', key: '0-0-0-2-3' },
            ],
          },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '0-0-2',
        key: '0-0-2',
        children: [
          {
            title: '0-0-2-0',
            key: '0-0-2-0',
          },
          {
            title: '0-0-2-1',
            key: '0-0-2-1',
          },
          {
            title: '0-0-2-2',
            key: '0-0-2-2',
          },
        ],
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
  },
  {
    title: '0-2',
    key: '0-2',
    children: [
      {
        title: '0-2-0',
        key: '0-2-0',
        disabled: true,
      },
      {
        title: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '0-2-2',
        key: '0-2-2',
      },
    ],
  },
]
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      value1: ['0-0'],
      value2: ['0-0-0'],
      data,
    }
  }
  changeValue(val, name) {
    this.setState({
      [name]: val,
    })
  }

  insertNode(node, data, newNode) {
    //
  }

  genTreeNode(parentId, isLeaf = false) {
    const random = Math.random()
      .toString(36)
      .substring(2, 6)
    return {
      id: random,
      title: random,
      isLeaf,
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label>单选:</label>
                <TreeSelect
                  data={data}
                  defaultValue={['0-0']}
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  placeholder="请选择"
                />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <label>多选:</label>
                <TreeSelect
                  data={data}
                  multiple
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  placeholder="请选择"
                  searchable
                  virtual={true}
                  onChange={value => {}}
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label>受控单选:</label>
                <TreeSelect
                  data={data}
                  value={this.state.value1}
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  onChange={(val, label, extra) => {
                    this.changeValue(val, 'value1')
                  }}
                  showCheckedStrategy="SHOW_CHILD"
                  placeholder="请选择"
                />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <label>受控多选:</label>
                <TreeSelect
                  data={this.state.data}
                  multiple
                  value={this.state.value2}
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  placeholder="请选择"
                  searchable
                  onChange={(val, label, extra) => {
                    this.changeValue(val, 'value2')
                  }}
                  treeDefaultExpandedKeys={['0-0-0']}
                  suffixIcon={node => {
                    if (node.expand) {
                      return <Ico type="normal" />
                    }
                    if (!node.expand && node.children && node.children.length) {
                      return <Ico type="normal-o" />
                    }
                    if (!node.children || !node.children.length) {
                      return <Ico type="heart-o" />
                    }
                  }}
                  onTreeExpand={(id, node) => {
                    // console.log(id, node);
                  }}
                  loadData={node => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        resolve()
                      }, 1000)
                    })
                  }}
                  allowClear
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
;<Example />
```

**Many Size**

```js
const data = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
      },
      {
        title: '0-0-1',
        key: '0-0-1',
      },
      {
        title: '0-0-2',
        key: '0-0-2',
        children: [
          {
            title: '0-0-2-0',
            key: '0-0-2-0',
          },
          {
            title: '0-0-2-1',
            key: '0-0-2-1',
          },
          {
            title: '0-0-2-2',
            key: '0-0-2-2',
          },
        ],
      },
    ],
  },
  {
    title: '0-1',
    key: '0-1',
  },
  {
    title: '0-2',
    key: '0-2',
    children: [
      {
        title: '0-2-0',
        key: '0-2-0',
        disabled: true,
      },
      {
        title: '0-2-1',
        key: '0-2-1',
      },
      {
        title: '0-2-2',
        key: '0-2-2',
      },
    ],
  },
]
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      value1: ['0-0'],
      value2: ['0-0-0'],
      data,
    }
  }
  changeValue(val, name) {
    this.setState({
      [name]: val,
    })
  }

  insertNode(node, data, newNode) {
    //
  }

  genTreeNode(parentId, isLeaf = false) {
    const random = Math.random()
      .toString(36)
      .substring(2, 6)
    return {
      id: random,
      title: random,
      isLeaf,
    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label>小:</label>
                <TreeSelect
                  data={data}
                  size="sm"
                  multiple
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  placeholder="请选择"
                />
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <Form>
              <FormGroup>
                <label>默认:</label>
                <TreeSelect
                  data={data}
                  multiple
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  placeholder="请选择"
                  searchable
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <label>大:</label>
                <TreeSelect
                  data={data}
                  size="lg"
                  multiple
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
                  showCheckedStrategy="SHOW_CHILD"
                  placeholder="请选择"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}
;<Example />
```
