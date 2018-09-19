### 代码示例

**基本用法**

```js
<div>
  <span>举个例子</span> <Tag>上海</Tag>
</div>
```

**边框**

```js
<Tag outline>已追单</Tag>
```

**圆角**

```js
<Tag shape="pill">99</Tag>
```

**多彩**

```js
<div>
  <div className="offset-b">
    <Tag className="offset-r">普通</Tag>
    <Tag theme="success" className="offset-r">
      成功
    </Tag>
    <Tag theme="warning" className="offset-r">
      提醒
    </Tag>
    <Tag theme="danger" className="offset-r">
      警告
    </Tag>
    <Tag theme="default">置灰</Tag>
  </div>
  <div>
    <Tag className="offset-r" outline>
      普通
    </Tag>
    <Tag theme="success" className="offset-r" outline>
      成功
    </Tag>
    <Tag theme="warning" className="offset-r" outline>
      提醒
    </Tag>
    <Tag theme="danger" className="offset-r" outline>
      警告
    </Tag>
    <Tag theme="default" className="offset-r" outline>
      置灰
    </Tag>
  </div>
</div>
```

**变更记录**

v2.0.0

* 默认值改为 primary
