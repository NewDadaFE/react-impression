弹性容器子项组件，配合 [Flex 组件](#/Layout/Flex) 实现弹性布局。

### 注意

> 历史问题，FlexItem 组件的样式上，设置了 **overflow: auto;**，可能会在使用时产生副作用，此时需要自行做样式覆写。

### 示例

```javascript
<Flex className='offset-b text-center'>
  <FlexItem className='bg-success'>flex 属性默认为 1</FlexItem>
  <div>天王盖地虎</div>
</Flex>
<Flex className='text-center'>
  <FlexItem className='bg-success' flex={2}>flex=2</FlexItem>
  <div>天王盖地虎</div>
  <FlexItem className='bg-success' flex={3}>
    <div className='text-nowrap'>flex=3 宝塔镇河妖！</div>
  </FlexItem>
</Flex>
```
