/* sourceCode:start */
import React from 'react'
import { Card } from 'react-impression'

const CardComplex = () => {
  return (
    <Card style={{ width: 300 }}>
      <Card.Header>Card 标题区域</Card.Header>
      <Card.Block>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
      </Card.Block>
      <Card.Footer>Card 尾部区域</Card.Footer>
    </Card>
  )
}

/* sourceCode:end */

CardComplex.title = '包含头部和尾部的卡片'
CardComplex.desc = `> 包含头部和尾部的卡片，总体分为三部分展示`

export default CardComplex
