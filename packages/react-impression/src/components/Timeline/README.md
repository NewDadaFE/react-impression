### Example

```js
<Row>
  <Col>
    <h5>Default</h5>
    <hr />
    <Timeline>
      <TimelineItem
          dot={<Icon type="play-circle-o" className="text-muted" />}>
          1999 疯狂世界
      </TimelineItem>
      <TimelineItem>2000 爱情万岁</TimelineItem>
      <TimelineItem>2001 候鸟</TimelineItem>
      <TimelineItem>2002 摇滚本事</TimelineItem>
      <TimelineItem
          dot={<Icon type="clock-o" className="text-warning" />}>
          2003 时光机
      </TimelineItem>
      <TimelineItem>2004 神的孩子在跳舞</TimelineItem>
      <TimelineItem>2005 盛夏光年</TimelineItem>
      <TimelineItem><p>2006 为爱而生</p>
          <p>天使</p>
          <p>忘词</p>
          <p>宠上天</p>
          <div>最重要的小事</div>
      </TimelineItem>
      <TimelineItem
          dot={<Icon type="globe" className="text-primary" />}>
          2007 离开地球表面
      </TimelineItem>
      <TimelineItem>2008 后青春期的诗</TimelineItem>
      <TimelineItem>2009 DNA</TimelineItem>
      <TimelineItem
          unreachable
          dot={<Icon type="flag-checkered" className="text-success" />}>
          2011 第二人生
      </TimelineItem>
      <TimelineItem
          dot={<Icon type="pause-circle-o" className="text-muted" />}>
          <a href="javascript:void(0);">查看更多</a>
      </TimelineItem>
    </Timeline>
  </Col>
  <Col>
    <h5>Large</h5>
    <hr />
    <Timeline size='lg'>
      <TimelineItem
          dot={<Icon type="play-circle-o" className="text-muted" />}>
          1999 疯狂世界
      </TimelineItem>
      <TimelineItem>2000 爱情万岁</TimelineItem>
      <TimelineItem>2001 候鸟</TimelineItem>
      <TimelineItem>2002 摇滚本事</TimelineItem>
      <TimelineItem
          dot={<Icon type="clock-o" className="text-warning" />}>
          2003 时光机
      </TimelineItem>
      <TimelineItem>2004 神的孩子在跳舞</TimelineItem>
      <TimelineItem>2005 盛夏光年</TimelineItem>
      <TimelineItem><p>2006 为爱而生</p>
          <p>天使</p>
          <p>忘词</p>
          <p>宠上天</p>
          <div>最重要的小事</div>
      </TimelineItem>
      <TimelineItem
          dot={<Icon type="globe" className="text-primary" />}>
          2007 离开地球表面
      </TimelineItem>
      <TimelineItem>2008 后青春期的诗</TimelineItem>
      <TimelineItem>2009 DNA</TimelineItem>
      <TimelineItem
          unreachable
          dot={<Icon type="flag-checkered" className="text-success" />}>
          2011 第二人生
      </TimelineItem>
      <TimelineItem
          dot={<Icon type="pause-circle-o" className="text-muted" />}>
          <a href="javascript:void(0);">查看更多</a>
      </TimelineItem>
    </Timeline>
  </Col>
</Row>
```