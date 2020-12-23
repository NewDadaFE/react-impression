### 示例

<style type='text/css'>
.row .flex {
  background-color: #D9D9D9;
  color: #FFFFFF;
}
</style>

#### 布局方向

```js
<Row>
  <Col>
    <strong>横向：(默认)</strong>
  </Col>
  <Col>
    <strong>纵向：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex direction='column'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>

```

#### 水平对齐方式

**1、居中对齐**

```js
<Row>
  <Col>
      <strong>横向：</strong>
  </Col>
  <Col>
      <strong>纵向：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex align='middle'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex direction='column' align='middle'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>
```

**2、顶部/头部对齐**

```js
<Row>
  <Col>
      <strong>横向：</strong>
  </Col>
  <Col>
      <strong>纵向：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex align='top'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex direction='column' align='top'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>
```

**3、底部/尾部对齐**

```js
<Row>
  <Col>
      <strong>横向：</strong>
  </Col>
  <Col>
      <strong>纵向：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex align='bottom'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex direction='column' align='bottom'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>
```

#### 两端对齐方式

```js
<Row>
  <Col>
      <strong>1、靠左：</strong>
  </Col>
  <Col>
      <strong>2、居中：</strong>
  </Col>
  <Col>
      <strong>3、靠右：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex justify='left'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex justify='center'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col>
    <Flex justify='right'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>
<Row>
  <Col>
      <strong>4、均匀分布：</strong>
  </Col>
  <Col />
  <Col>
      <strong>5、两端对齐：</strong>
  </Col>
</Row>
<Row>
  <Col>
    <Flex justify='around'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
  <Col />
  <Col>
    <Flex justify='between'>
      <span className='bg-success'>天王</span>
      <Button>盖</Button>
      <span className='bg-success'>地虎对什么</span>
    </Flex>
  </Col>
</Row>
```
