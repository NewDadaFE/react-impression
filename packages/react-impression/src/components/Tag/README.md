### 示例

#### 主题

```javascript
<div>
  <div className="offset-b">
    <Tag className="offset-r">普通</Tag>
    <Tag theme="info" className="offset-r">
      信息
    </Tag>
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
    <Tag theme="info" className="offset-r" outline>
      信息
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
    <Tag theme="default" outline>
      置灰
    </Tag>
  </div>
</div>
```

#### 尺寸

```javascript
<div className='offset-b-sm'>
  小号（默认）：
  <Tag className='offset-r-sm' size='sm'>上海</Tag>
  <Tag size='sm'>上海欢迎你 Welcome to Shanghai ！</Tag>
</div>
<div>
  中号：
  <Tag className='offset-r-sm' size='md'>上海</Tag>
  <Tag size='md'>上海欢迎你 Welcome to Shanghai ！</Tag>
</div>
```

#### 显示关闭图标

```javascript
<div className="offset-b-sm">
  <Tag className="offset-r-sm" size="md" closable>
    上海
  </Tag>
  <Tag className="offset-r-sm" size="sm" closable>
    上海
  </Tag>
  <Tag className="offset-r-sm" closable>
    上海欢迎你 Welcome to Shanghai ！
  </Tag>
  <Tag outline closable>
    上海
  </Tag>
</div>
```

#### 圆角

注意：shape 属性有值时，size 属性值无效。

```js
<Tag shape="pill">99</Tag>
```

**变更记录**

v2.0.0

- 默认值改为 primary

v3.0.0

- 新增 size 属性，支持 sm、md 2 种尺寸。
