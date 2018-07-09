import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row, Col, Timeline, Icon } from 'react-impression'
import CommenTable from 'src/app/components/CommenTable'
import Highlight from 'src/app/components/Highlight'
import Breadcrumb from 'src/app/components/Breadcrumb'

const TimelineView = ({ routes }) => {
  return (
    <div>
      <Breadcrumb routes={routes} />
      <Card block noborder>
        <h3>Timeline</h3>
        <Row>
          <Col>
            <Card>
              <Card.Header>Default</Card.Header>
              <Card.Block>
                <Timeline>
                  <Timeline.Item
                    dot={<Icon type='play-circle-o' className='text-muted' />}
                  >
                    1999 疯狂世界
                  </Timeline.Item>
                  <Timeline.Item>2000 爱情万岁</Timeline.Item>
                  <Timeline.Item>2001 候鸟</Timeline.Item>
                  <Timeline.Item>2002 摇滚本事</Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='clock-o' className='text-warning' />}
                  >
                    2003 时光机
                  </Timeline.Item>
                  <Timeline.Item>2004 神的孩子在跳舞</Timeline.Item>
                  <Timeline.Item>2005 盛夏光年</Timeline.Item>
                  <Timeline.Item>
                    <p>2006 为爱而生</p>
                    <p>天使</p>
                    <p>忘词</p>
                    <p>宠上天</p>
                    <div>最重要的小事</div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='globe' className='text-primary' />}
                  >
                    2007 离开地球表面
                  </Timeline.Item>
                  <Timeline.Item>2008 后青春期的诗</Timeline.Item>
                  <Timeline.Item>2009 DNA</Timeline.Item>
                  <Timeline.Item
                    unreachable
                    dot={
                      <Icon type='flag-checkered' className='text-success' />
                    }
                  >
                    2011 第二人生
                  </Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='pause-circle-o' className='text-muted' />}
                  >
                    <a href='javascript:void(0);'>查看更多</a>
                  </Timeline.Item>
                </Timeline>
              </Card.Block>
              <Highlight>
                {'import { Timeline } from "impression-react";\n\n'}
                {'<Timeline>\n'}
                {
                  '  <Timeline.Item dot={<Icon type="play-circle-o" className="text-muted"/>}>\n'
                }
                {'    1999 疯狂世界\n'}
                {'  </Timeline.Item>\n  ... \n'}
                {
                  '  <Timeline.Item dot={<Icon type="pause-circle-o" className="text-muted"/>}>\n'
                }
                {'    <a href="javascript:void(0);">查看更多</a>\n'}
                {'   </Timeline.Item>\n'}
                {'</Timeline>'}
              </Highlight>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Header>Large</Card.Header>
              <Card.Block>
                <Timeline size='lg'>
                  <Timeline.Item
                    dot={<Icon type='play-circle-o' className='text-muted' />}
                  >
                    1999 疯狂世界
                  </Timeline.Item>
                  <Timeline.Item>2000 爱情万岁</Timeline.Item>
                  <Timeline.Item>2001 候鸟</Timeline.Item>
                  <Timeline.Item>2002 摇滚本事</Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='clock-o' className='text-warning' />}
                  >
                    2003 时光机
                  </Timeline.Item>
                  <Timeline.Item>2004 神的孩子在跳舞</Timeline.Item>
                  <Timeline.Item>2005 盛夏光年</Timeline.Item>
                  <Timeline.Item>
                    <p>2006 为爱而生</p>
                    <p>天使</p>
                    <p>忘词</p>
                    <p>宠上天</p>
                    <div>最重要的小事</div>
                  </Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='globe' className='text-primary' />}
                  >
                    2007 离开地球表面
                  </Timeline.Item>
                  <Timeline.Item>2008 后青春期的诗</Timeline.Item>
                  <Timeline.Item>2009 DNA</Timeline.Item>
                  <Timeline.Item
                    unreachable
                    dot={
                      <Icon type='flag-checkered' className='text-success' />
                    }
                  >
                    2011 第二人生
                  </Timeline.Item>
                  <Timeline.Item
                    dot={<Icon type='pause-circle-o' className='text-muted' />}
                  >
                    <a href='javascript:void(0);'>查看更多</a>
                  </Timeline.Item>
                </Timeline>
              </Card.Block>
              <Highlight>{'<Timeline size="lg">...</Timeline>'}</Highlight>
            </Card>
          </Col>
        </Row>
        <h3>Timeline API</h3>
        <CommenTable
          data={[
            ['size', '时间线节点尺寸，可选值为 lg', 'string', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
        <h3>Timeline.Item API</h3>
        <CommenTable
          data={[
            ['dot', '自定义 Icon', 'element', ''],
            ['unreachable', '是否可到达', 'boolean', ''],
            ['className', '自定义样式', 'string', ''],
          ]}
        />
      </Card>
    </div>
  )
}

TimelineView.propTypes = {
  routes: PropTypes.array,
}

export default TimelineView
