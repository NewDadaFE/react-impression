/* sourceCode:start */
import React from 'react'
import { Card } from 'react-impression'

const CardSimple = () => {
  return (
    <Card style={{ width: 300 }}>
      <Card.Block>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
        <p>Card 内容区域</p>
      </Card.Block>
    </Card>
  )
}
/* sourceCode:end */

CardSimple.title = '最简洁的卡片'
CardSimple.desc = `> 只包含内容区域`

export default CardSimple
