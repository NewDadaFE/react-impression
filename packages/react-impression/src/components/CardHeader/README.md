### 示例

**基本用法**

```js
<Card>
  <CardHeader className="text-left">居于左侧大标题</CardHeader>
  <CardBlock>
    <h4 style={{ color: '#133240' }}>标题</h4>
    <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
    <div className="text-center">
      <Button theme="primary" style={{ margin: '10px 0' }}>
        好的
      </Button>
      <Button theme="default" style={{ margin: '10px 0 10px 20px' }}>
        取消
      </Button>
    </div>
  </CardBlock>
</Card>
```

**基本用法**

```js
<Card>
  <CardHeader className="text-center">居于正中大标题</CardHeader>
  <CardBlock>
    <h4 style={{ color: '#133240' }}>标题</h4>
    <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
    <div className="text-center">
      <Button theme="primary" style={{ margin: '10px 0' }}>
        好的
      </Button>
      <Button theme="default" style={{ margin: '10px 0 10px 20px' }}>
        取消
      </Button>
    </div>
  </CardBlock>
</Card>
```

**基本用法**

```js
<Card>
  <CardHeader className="text-right">居于右侧大标题</CardHeader>
  <CardBlock>
    <h4 style={{ color: '#133240' }}>标题</h4>
    <p>我是一个示例，这块区域是内容区域，我可以包含很多内容</p>
    <div className="text-center">
      <Button theme="primary" style={{ margin: '10px 0' }}>
        好的
      </Button>
      <Button theme="default" style={{ margin: '10px 0 10px 20px' }}>
        取消
      </Button>
    </div>
  </CardBlock>
</Card>
```

### 变更记录

v2.0.0

* 增加 align 属性，包含 left，center，right 三种属性
