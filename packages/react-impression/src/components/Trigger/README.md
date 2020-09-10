#### 组件说明

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

#### 示例

**注意：**
Trigger 组件弹出层在定位时，需要获取寄主（children）的位置，所以请务必保证寄主可以接受 ref 属性。<br/>
如果寄主没有传递 ref，可以用标签包装一下寄主，并保证外包标签的 display 属性与寄主最外层 dom 一致。

```javascript
<Form>
  <FormGroup>
    <label>点击显示：</label>
    <Trigger
      popup={
        <div className="offset-t offset-b offset-l offset-r">晴空万里</div>
      }
    >
      <Button>点击查看</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>鼠标悬停显示：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="offset-t offset-b offset-l offset-r">晴空万里</div>
      }
    >
      <Button>鼠标悬停查看</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>动画：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="offset-t offset-b offset-l offset-r">晴空万里</div>
      }
      transitionName="zoom"
    >
      <Button>弹出动画</Button>
    </Trigger>
  </FormGroup>
  <FormGroup>
    <label>弹出层位置：</label>
    <Trigger
      showAction="hover"
      popup={
        <div className="offset-t offset-b offset-l offset-r">晴空万里</div>
      }
      placement="right"
    >
      <Button>显示在右侧</Button>
    </Trigger>
  </FormGroup>
</Form>
```

**自由控制弹出层**

下面的示例中，Input 组件没有传递 ref，所以使用了一个 span 标签包装，display 属性为 inline-block。

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
