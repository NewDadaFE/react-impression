### 组件说明

弹出层触发器适用于下拉菜单、弹出提示、日期选择等场景。<br/>
**showAction 属性**：弹出层显示触发的操作类型；<br/>
**hideAction 属性**：指定弹出层隐藏触发的操作类型。

hideAction 没有指定时，弹出层隐藏的触发类型由 showAction 决定，对应关系如下：

| showAction | hideAction |
| ---------- | ---------- |
| click      | 无         |
| focus      | blur       |
| hover      | mouseLeave |

如果要通过 popupVisible 属性**自行控制弹出层的显示隐藏**，将 showAction 和 hideAction 都设置为 none 即可。

### 注意

> onPopupVisibleChange 回调不能传入内联回调函数！否则会引发死循环。

> Trigger 组件弹出层在定位时，需要获取触发器（children）的位置，所以**请务必保证触发器可以接受 ref 属性**。<br/>
> 如果触发器没有传递 ref，可以用标签包装一下触发器，并**保证外包标签的 display 属性与触发器最外层 dom 一致**。

### 示例

**触发行为**

```javascript
<Form>
  <FormGroup>
    <label>点击（默认）：</label>
    <Trigger
      popup={
        <div className="padding-t padding-b padding-l padding-r">晴空万里</div>
      }
    >
      <Button>点击查看</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>鼠标悬停：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="padding-t padding-b padding-l padding-r">晴空万里</div>
      }
    >
      <Button>鼠标悬停查看</Button>
    </Trigger>
  </FormGroup>
</Form>
```

**外观**

```javascript
<Form>
  <FormGroup>
    <label>动画：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="padding-t padding-b padding-l padding-r">晴空万里</div>
      }
      transitionName="zoom"
    >
      <Button>弹出动画</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>描边：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="padding-t padding-b padding-l padding-r">晴空万里</div>
      }
      popupShadow="none"
      popupBorder
    >
      <Button>显示描边</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>箭头：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="padding-t padding-b padding-l padding-r">晴空万里</div>
      }
      arrowVisible
      popupBorder
    >
      <Button>显示箭头</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>宽度伸缩：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="padding-t padding-b padding-l padding-r">
          蓝天白云，晴空万里
        </div>
      }
      stretch="auto"
    >
      <Button>宽度伸缩</Button>
    </Trigger>
  </FormGroup>
</Form>
```

**位置**

```javascript
<Form>
  <FormGroup>
    <label>弹出层位置：</label>
    <Trigger
      showAction="hover"
      popup={
        <div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
        </div>
      }
      placement="right-end"
    >
      <Button>显示在右侧</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>X偏移：</label>
    <Trigger
      showAction="hover"
      popup={
        <div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
        </div>
      }
      offsetX={30}
    >
      <Button>指定X偏移</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>Y偏移：</label>
    <Trigger
      showAction="hover"
      popup={
        <div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
          <div className="padding-t padding-b padding-l padding-r">
            晴空万里
          </div>
        </div>
      }
      offsetY={20}
    >
      <Button>指定Y偏移</Button>
    </Trigger>
  </FormGroup>
</Form>
```

**自由控制弹出层**

下面的示例中，Input 组件没有传递 ref，所以使用了一个 span 标签包装，display 属性为 inline-block。<br/>
使用 popupClassName 属性自定义弹出层样式时，可以通过覆写 **.custom-class > .dada-trigger-inner** 实现。

```javascript
class Example extends React.Component {
  constructor() {
    super()
    this.state = {
      show: false,
      inputValue: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handlePopupVisibleChange = this.handlePopupVisibleChange.bind(this)
  }

  handlePopupVisibleChange(popupVisible) {
    this.setState({ show: popupVisible })
  }

  handleInputChange(value) {
    this.setState({
      show: !!value,
      inputValue: value,
    })
  }

  render() {
    return (
      <Trigger
        showAction="none"
        hideAction="none"
        popupVisible={this.state.show}
        onPopupVisibleChange={this.handlePopupVisibleChange}
        popup={
          <div className="offset-t offset-b offset-l offset-r">晴空万里</div>
        }
      >
        <span className="d-inline-block">
          <Input
            placeholder="输入内容显示弹出层"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </span>
      </Trigger>
    )
  }
}
;<Example />
```

### 变更记录

v3.0.0

- 新增 Trigger 组件
