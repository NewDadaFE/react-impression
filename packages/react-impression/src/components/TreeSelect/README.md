### 示例

**基本用法**

最简单的用法，展示可勾选，可选中，禁用，默认展开等功能。TreeSelect 的默认宽度为容器的 100%。

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

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup
                style={{
                  width: '100%',
                }}
              >
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
              <FormGroup
                style={{
                  width: '100%',
                }}
              >
                <label>多选:</label>
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
              <FormGroup
                style={{
                  width: '100%',
                }}
              >
                <label>禁用:</label>
                <TreeSelect
                  data={data}
                  disabled
                  defaultValue={['0-0']}
                  treeRenderPropReflect={{ id: 'key', label: 'title' }}
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

**异步加载节点**

当设置 loadData 方法时视为开启异步加载节点，所有节点均能展开请求子节点，除非给节点设置 isLeaf 属性 true。

```js
const data = [
  {
    title: '0-0',
    key: '0-0',
  },
  {
    title: '0-1',
    key: '0-1',
  },
  {
    title: '0-2',
    key: '0-2',
    isLeaf: true,
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
    this.treeRenderPropReflect = { id: 'key', label: 'title' }
    this.changeData.bind(this)
  }
  changeData(node) {
    const newData = [...this.state.data]
    let indexNode = null
    node.position.split(',').forEach(index => {
      if (indexNode === null) {
        indexNode = newData[index - 1]
      } else {
        indexNode = indexNode.children[index - 1]
      }
    })
    indexNode.children = [
      {
        title: node.title + '-0',
        key: node.title + '-0',
        children: [],
      },
    ]

    this.setState({
      data: newData,
    })
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Form>
              <FormGroup
                style={{
                  width: '100%',
                }}
              >
                <TreeSelect
                  data={this.state.data}
                  size="sm"
                  multiple
                  placeholder="请选择"
                  showCheckedStrategy="SHOW_ALL"
                  treeRenderPropReflect={this.treeRenderPropReflect}
                  loadData={node => {
                    return new Promise(resolve => {
                      setTimeout(() => {
                        this.changeData(node)
                        resolve()
                      }, 0)
                    })
                  }}
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

**自定义图标**

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
    ],
  },
  {
    title: '0-1',
    key: '0-1',
  },
  {
    title: '0-2',
    key: '0-2',
  },
]
const treeRenderPropReflect = { id: 'key', label: 'title' }
const Example = function() {
  return (
    <div>
      <Row>
        <Col>
          <Form>
            <FormGroup
              style={{
                width: '100%',
              }}
            >
              <TreeSelect
                data={data}
                size="sm"
                multiple
                placeholder="请选择"
                showCheckedStrategy="SHOW_ALL"
                treeRenderPropReflect={treeRenderPropReflect}
                switcherIcon={<Ico type="angle-double-right" />}
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
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
;<Example />
```

**节点禁用**

可以给节点单独设置 disabled 属性，禁用的节点会完全脱离整树的全选半选反选的行为。
disabled 的节点仍可以展开正常勾选。

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
        disabled: true,
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
            children: [
              {
                title: '0-0-2-2-0',
                key: '0-0-2-2-0',
              },
              {
                title: '0-0-2-2-1',
                key: '0-0-2-2-1',
              },
              {
                title: '0-0-2-2-2',
                key: '0-0-2-2-2',
              },
            ],
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
const treeRenderPropReflect = { id: 'key', label: 'title' }
const Example = function() {
  return (
    <div>
      <Row>
        <Col>
          <Form>
            <FormGroup
              style={{
                width: '100%',
              }}
            >
              <TreeSelect
                data={data}
                size="sm"
                allowClear
                defaultValue={['0-0']}
                multiple
                placeholder="请选择"
                treeRenderPropReflect={treeRenderPropReflect}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  )
}
;<Example />
```

**节点选中策略**

选中的节点可以已不同的策略展示返回，有三种，默认 SHOW_PARENT，三个值由 TreeSelect 导出。

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
            children: [
              {
                title: '0-0-2-2-0',
                key: '0-0-2-2-0',
              },
              {
                title: '0-0-2-2-1',
                key: '0-0-2-2-1',
              },
              {
                title: '0-0-2-2-2',
                key: '0-0-2-2-2',
              },
            ],
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
const treeRenderPropReflect = { id: 'key', label: 'title' }
const Example = function() {
  return (
    <div>
      <Row>
        <Col>
          <Form>
            <FormGroup
              style={{
                width: '100%',
              }}
            >
              <label>只包含父节点:</label>
              <TreeSelect
                data={data}
                size="sm"
                allowClear
                showCheckedStrategy="SHOW_PARENT"
                defaultValue={['0-0']}
                multiple
                placeholder="请选择"
                treeRenderPropReflect={treeRenderPropReflect}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <Form>
            <FormGroup
              style={{
                width: '100%',
              }}
            >
              <label>包含所有节点:</label>
              <TreeSelect
                data={data}
                size="sm"
                allowClear
                showCheckedStrategy="SHOW_ALL"
                defaultValue={['0-0']}
                multiple
                placeholder="请选择"
                treeRenderPropReflect={treeRenderPropReflect}
              />
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <FormGroup
              style={{
                width: '100%',
              }}
            >
              <label>只包含叶子结点:</label>
              <TreeSelect
                data={data}
                size="sm"
                allowClear
                showCheckedStrategy="SHOW_CHILD"
                defaultValue={['0-0']}
                multiple
                placeholder="请选择"
                treeRenderPropReflect={treeRenderPropReflect}
              />
            </FormGroup>
          </Form>
        </Col>
        <Col />
      </Row>
    </div>
  )
}
;<Example />
```
