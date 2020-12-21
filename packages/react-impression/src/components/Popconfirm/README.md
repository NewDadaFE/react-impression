### 示例

**基本用法**

```js
<Popconfirm
  content={(
    <div>
      <Ico className='offset-r text-warning' type='question-circle' />
      确认删除此项内容？
    </div>
  )}
  onCancel={() => Message.warning('关闭气泡！')}
  onOk={() => Message.success('操作成功！')}
>
  <TextLink>删除</TextLink>
</Popconfirm>
<Message />
```

**方向**

默认：顶部（top）

```js
initialState = {
  content: '确认删除此项内容？',
}
;<div>
  <Row className="text-center">
    <Col col={2} />
    <Col col={2}>
      <Popconfirm position="top-start" content={state.content}>
        <Button theme="secondary">top-start</Button>
      </Popconfirm>
    </Col>
    <Col col={2}>
      <Popconfirm position="top" content={state.content}>
        <Button>top</Button>
      </Popconfirm>
    </Col>
    <Col col={2}>
      <Popconfirm position="top-end" content={state.content}>
        <Button theme="secondary">top-end</Button>
      </Popconfirm>
    </Col>
    <Col col={2} />
  </Row>
  <Row className="text-center">
    <Col col={2}>
      <Popconfirm position="left" content={state.content}>
        <Button theme="secondary">left</Button>
      </Popconfirm>
    </Col>
    <Col col={2} />
    <Col col={2} />
    <Col col={2} />
    <Col col={2}>
      <Popconfirm position="right" content={state.content}>
        <Button theme="secondary">right</Button>
      </Popconfirm>
    </Col>
  </Row>
  <Row className="text-center">
    <Col col={2} />
    <Col col={2}>
      <Popconfirm position="bottom-start" content={state.content}>
        <Button theme="secondary">bottom-start</Button>
      </Popconfirm>
    </Col>
    <Col col={2}>
      <Popconfirm position="bottom" content={state.content}>
        <Button theme="secondary">bottom</Button>
      </Popconfirm>
    </Col>
    <Col col={2}>
      <Popconfirm position="bottom-end" content={state.content}>
        <Button theme="secondary">bottom-end</Button>
      </Popconfirm>
    </Col>
    <Col col={2} />
  </Row>
</div>
```

**延迟关闭气泡**

配合 visible 属性可以实现延迟关闭气泡的效果。

```js
function Example() {
  const [visible, setVisible] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <Popconfirm
      content={
        <div>
          <Ico className="offset-r text-warning" type="question-circle" />
          确认删除此项内容？
        </div>
      }
      onCancel={() => setVisible(false)}
      onOk={() => {
        setIsLoading(true)
        setTimeout(() => {
          setVisible(false)
          setIsLoading(false)
        }, 1000)
      }}
      visible={visible}
      okButtonProps={{ loading: isLoading, disabled: isLoading }}
    >
      <TextLink onClick={() => setVisible(!visible)}>删除</TextLink>
    </Popconfirm>
  )
}
;<Example />
```

### 变更记录

v3.0.0

- 新增 Popconfirm 组件
