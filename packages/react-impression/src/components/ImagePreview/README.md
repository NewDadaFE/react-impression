### 示例

**基本用法**

```js
const files = [
  {
    name: '123',
    url: 'https://fe.imdada.cn/react-impression/image-1.jpeg',
  },
  {
    name: '456',
    url: 'https://fe.imdada.cn/react-impression/image-2.jpeg',
  },
  {
    name: '789',
    url: 'https://fe.imdada.cn/react-impression/image-3.jpeg',
  },
  {
    name: '10',
    url: 'https://fe.imdada.cn/react-impression/image-4.png',
  },
]
const onClose = () => {
  setState({
    showImagePreview: false,
    files: files,
    startPosition: 0,
    duration: 300,
  })
}

initialState = {
  showImagePreview: false,
  files: files,
  startPosition: 0,
  duration: 300,
}
;<div>
  <Row>
    <Col>
      <Button onClick={() => setState({ showImagePreview: true })}>
        多图查看
      </Button>
    </Col>
    <Col>
      <Button
        onClick={() => setState({ showImagePreview: true, startPosition: 1 })}
      >
        指定索引位置
      </Button>
    </Col>
    <Col>
      <Button
        onClick={() => setState({ showImagePreview: true, duration: 1000 })}
      >
        设置1s动画时长
      </Button>
    </Col>
    <Col>
      <Button
        onClick={() => setState({ showImagePreview: true, files: [files[3]] })}
      >
        单图查看
      </Button>
    </Col>
  </Row>
  {state.showImagePreview && (
    <ImagePreview
      files={state.files}
      startPosition={state.startPosition}
      duration={state.duration}
      onClose={onClose}
    />
  )}
</div>
```

### 变更记录

v3.0.5

- 新增 ImagePreview 组件
