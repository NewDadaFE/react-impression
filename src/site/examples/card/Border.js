/* sourceCode:start */
import React from 'react'
import { Card } from 'react-impression'

const CardBorder = () => {
  return (
    <Card style={{ width: 300 }} noBorder>
      <Card.Header>Card 标题区域</Card.Header>
      <Card.Block>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
      </Card.Block>
    </Card>
  )
}

/* sourceCode:end */

CardBorder.title = '无边框的卡片'
CardBorder.desc = `> 在灰色背景上使用无边框的卡片`

export default CardBorder
