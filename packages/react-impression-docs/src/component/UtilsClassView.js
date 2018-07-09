import React from 'react'
import { ul, li, Card } from 'react-impression'

const UtilsClassView = () => {
  return (
    <Card block noborder>
      <h3>background</h3>
      <ul>
        <li>.bg-inverse</li>
        <li>.bg-faded</li>
        <li>.bg-default</li>
        <li>.bg-pure</li>
        <li>.bg-primary</li>
        <li>.bg-success</li>
        <li>.bg-secondary</li>
        <li>.bg-warning</li>
        <li>.bg-danger</li>
      </ul>
      <h3>border</h3>
      <ul>
        <li>.no-border</li>
      </ul>
      <h3>clearfix</h3>
      <ul>
        <li>.clearfix</li>
        <li>.pull-left</li>
        <li>.pull-right</li>
        <li>.pull-none</li>
      </ul>
      <h3>display</h3>
      <ul>
        <li>.d-block</li>
        <li>.d-inline-block</li>
        <li>.d-inline</li>
      </ul>
      <h3>flex</h3>
      <ul>
        <h5>Flex column reordering</h5>
        <li>.flex-*-first</li>
        <li>.flex-*-last</li>

        <h5>Alignment for every item</h5>
        <li>.flex-items-*-top</li>
        <li>.flex-items-*-middle</li>
        <li>.flex-items-*-bottom</li>

        <h5>Alignment per item</h5>
        <li>.flex-*-top</li>
        <li>.flex-*-middle</li>
        <li>.flex-*-bottom</li>

        <h5>Horizontal alignment of item</h5>
        <li>.flex-items-*-left</li>
        <li>.flex-items-*-center</li>
        <li>.flex-items-*-right</li>
        <li>.flex-items-*-around</li>
        <li>.flex-items-*-between</li>

        <h5>容器</h5>
        <li>.flex</li>
        <li>.flex-vertical</li>
        <li>.flex-item</li>
        <li>.flex-item-2</li>
        <li>.flex-item-3</li>

        <h5>*为xs、sm、md、lg、xl</h5>
      </ul>
      <h3>screenrenders</h3>
      <ul>
        <li>.sr-only</li>
        <li>.sr-only-focusable</li>
      </ul>
      <h3>spacing</h3>
      <ul>
        <li>.offset-l</li>
        <li>.offset-l-lg</li>
        <li>.offset-r</li>
        <li>.offset-r-lg</li>
        <li>.offset-t</li>
        <li>.offset-b</li>
        <li>.offset-b-lg</li>
        <li>padding-t</li>
        <li>padding-b</li>
        <li>padding-l</li>
        <li>padding-r</li>
        <li>.no-margin</li>
        <li>.no-padding</li>
        <li>.no-padding-l</li>
        <li>.no-padding-r</li>
        <li>.no-border</li>
      </ul>
      <h2>text</h2>
      <ul>
        <h5>Alignment</h5>
        <li>.text-justify</li>
        <li>.text-nowrap</li>
        <li>.text-truncate</li>
        <li>.text-left</li>
        <li>.text-right</li>
        <li>.text-center</li>

        <h5>Transformation</h5>
        <li>.text-lowercase</li>
        <li>.text-uppercase</li>
        <li>.text-capitalize</li>

        <h5>Weight and italics</h5>
        <li>.font-weight-normal</li>
        <li>.font-weight-bold</li>
        <li>.font-italic</li>
        <li>.vertical-middle</li>

        <h5>Contextual colors</h5>
        <li>.text-muted</li>
        <li>.text-primary</li>
        <li>.text-success</li>
        <li>.text-info</li>
        <li>.text-warning</li>
        <li>.text-danger</li>
        <li>.text-secondary</li>

        <h5>Misc</h5>
        <li>.text-hide</li>
      </ul>
      <h2>visibility</h2>
      <ul>
        <li>.invisible</li>
        <li>.hidden</li>
      </ul>
    </Card>
  )
}

export default UtilsClassView
