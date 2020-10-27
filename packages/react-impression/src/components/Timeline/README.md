### 示例

**基本用法**

```js
<Row>
  <Col col={12}>
    <Timeline>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-12 11:21:34</Col>
          <Col col={2}>买家</Col>
          <Col col={2}>签收</Col>
        </Row>
      </TimelineItem>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-11 11:21:34</Col>
          <Col col={2}>快递员</Col>
          <Col col={2}>配送中</Col>
        </Row>
      </TimelineItem>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-10 11:21:34</Col>
          <Col col={2}>物流</Col>
          <Col col={2}>物流运送中</Col>
        </Row>
      </TimelineItem>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-09 11:21:34</Col>
          <Col col={2}>物流</Col>
          <Col col={2}>快递收入</Col>
        </Row>
      </TimelineItem>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-08 11:21:34</Col>
          <Col col={2}>商家</Col>
          <Col col={2}>已发货</Col>
        </Row>
      </TimelineItem>
      <TimelineItem>
        <Row>
          <Col col={3}>2017-04-07 11:21:34</Col>
          <Col col={2}>买家</Col>
          <Col col={2}>下单</Col>
        </Row>
      </TimelineItem>
      <TimelineItem dot={<Ico type="pause-circle-o" className="text-muted" />}>
        <a href="#">查看更多</a>
      </TimelineItem>
    </Timeline>
  </Col>
</Row>
```

**大号用法**

```js
<Row>
  <Col col={12}>
    <Timeline size="lg">
      <TimelineItem
        dot={<Ico type="location" style={{ fontSize: 40, marginLeft: -12 }} />}
        Title={
          <div>
            <div style={{ fontSize: 16, color: '#262626' }}>2017-05-12</div>
            <div>11:21:34</div>
          </div>
        }
      >
        维打复持什进江把消农，从之名强照别形切高，区战35约信构南。
        和响做什经口都飞广中，自明格十K坑总矿。
        才了组示了平农道易，没际志太家光商力，满运隶低长花论。维打复持什进江把消农，从之名强照别形切高，区战35约信构南。
        和响做什经口都飞广中，自明格十K坑总矿。
        才了组示了平农道易，没际志太家光商力，满运隶低长花论。
        通米厂素领前条毛真改组说只，并引开族华两世志料然。
        以场或活来联华原，亲构引什元一多由，劳性前而干志4，亲公我何呆极。
        增教节应热下部极火精你更思，技厂水集发万M两海壳求。维打复持什进江把消农，从之名强照别形切高，区战35约信构南。
        和响做什经口都飞广中，自明格十K坑总矿。
        才了组示了平农道易，没际志太家光商力，满运隶低长花论。
        通米厂素领前条毛真改组说只，并引开族华两世志料然。
      </TimelineItem>
      <TimelineItem
        Title={
          <div>
            <div style={{ fontSize: 16, color: '#262626' }}>2017-05-11</div>
            <div>11:21:34</div>
          </div>
        }
      >
        维打复持什进江把消农，从之名强照别形切高，区战35约信构南。
        和响做什经口都飞广中，自明格十K坑总矿。
        才了组示了平农道易，没际志太家光商力，满运隶低长花论。
      </TimelineItem>
      <TimelineItem
        Title={
          <div>
            <div style={{ fontSize: 16, color: '#262626' }}>2017-05-10</div>
            <div>11:21:34</div>
          </div>
        }
      >
        维打复持什进江把消农，从之名强照别形切高，区战35约信构南。
        和响做什经口都飞广中，自明格十K坑总矿。
        才了组示了平农道易，没际志太家光商力，满运隶低长花论。
      </TimelineItem>
    </Timeline>
  </Col>
</Row>
```
