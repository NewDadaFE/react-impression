import React from 'react'
import Card from '@/site/components/Card'
import Type from './Type'
import Size from './Size'

export default () => {
  return (
    <div>
      <Card component={Type} />
      <Card component={Size} />
    </div>
  )
}
